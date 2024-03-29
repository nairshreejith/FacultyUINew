<template>
  <div class="nnit-upload">
    <v-file-input
      v-model="files"
      v-show="!onlyDisplay"
      :accept="accept"
      :label="
        label != null
          ? label
          : internalFiles
          ? multiple
            ? 'Upload'
            : 'Upload'
          : multiple
          ? 'Upload'
          : 'Upload'
      "
      class="datainput justify-content-end align-self-center pb-1 file-input"
      dense
      outlined
      :multiple="multiple"
      :placeholder="multiple ? '' : ''"
      prepend-icon=""
      clearable="false"
      @change="handleUpload"
    >
      <template v-slot:selection="{ index, file }">
        <div class="file-selection">
          <span class="file-name">{{ file.name }}</span>
          <span class="file-size">{{ getFileSize(file) }}MB</span>
          <span class="file-delete" v-show="!onlyDisplay">
            <v-icon @click.stop="removeFile(index)" color="#003A60">fas fa-trash</v-icon>
          </span>
        </div>
      </template>
    </v-file-input>
    <div class="already-uploaded">
      <div class="file-selection" v-for="filename in fileNames" :key="filename">
        <span class="file-name" @click="showFile(filename)">{{
          getUploadedFileName(filename)
        }}</span>
        <span class="file-delete" v-show="!onlyDisplay">
          <v-icon @click.stop="removeFile(filename)" color="#003A60">fas fa-trash</v-icon>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: function () {
        return null;
      },
    },
    accept: {
      type: String,
      default: function () {
        return "image/png, image/gif, image/jpeg, image/jpg";
      },
    },
    maxSize: {
      type: Number,
      default: function () {
        return 1000;
      },
    },
    multiple: {
      type: Boolean,
      default: function () {
        return false;
      },
    },
    allowOtherFileTypes: {
      type: Boolean,
      default: function () {
        return false;
      },
    },
    application: {
      type: Boolean,
      default: function () {
        return false;
      },
    },
    internalFiles: {
      type: Boolean,
      default: function () {
        return false;
      },
    },
    onlyDisplay: {
      type: Boolean,
      default: function () {
        return false;
      },
    },
    value: Object, // for v-model Binding
  },

  data() {
    return {
      newFilesSelected: false,
      suffix: "image",
      suffix_plural: "images",
    };
  },

  computed: {
    fileNames: {
      get() {
        if (typeof this.value == "string") {
          return [this.value];
        }
        return this.value;
      },
      set(val) {
        this.$emit("input", val);
      },
    },
  },

  mounted() {
    if (this.allowOtherFileTypes) {
      this.accept = "/*";
      this.suffix = "file";
      this.suffix_plural = "files";
    }
  },

  methods: {
    handleUpload(files) {
      var _this = this;

      for (let i = 0; i < files.length; i++) {
        const file = files[i];

        var formData = new FormData();
        formData.append("file", file);
        formData.append("internalFile", this.internalFiles);

        const path = this.application ? "/files/upload-application" : "/files/upload";

        this.$axios
          .post(path, formData, {
            headers: { "Content-Type": "multipart/form-data" },
          })
          .then(function (response) {
            _this.newFilesSelected = true;
            if (_this.multiple) {
              _this.fileNames.push(response.data);
            } else {
              if (_this.fileNames != null && _this.fileNames.length > 0) {
                // Remove single file from Server (if not multiple selected!)
                _this.removeFile(_this.fileNames[0]);
              }
              _this.fileNames = response.data;
            }
            _this.files = [];
          })
          .catch(this.onError);
      }
    },

    showFile(fileName) {
      const nameString = fileName.toLowerCase();
      const internalFolder = this.internalFiles ? "internal/" : "";
      var _this = this;

      if (
        nameString.endsWith(".png") ||
        nameString.endsWith(".jpeg") ||
        nameString.endsWith(".jpg") ||
        nameString.endsWith(".pdf") ||
        nameString.endsWith(".gif") ||
        nameString.endsWith(".txt")
      ) {
        var win = window.open("/files/images/" + internalFolder + fileName, "_blank");
        win.focus();
      } else {
        window.open("/files/images/" + internalFolder + fileName);
      }
    },

    getFileSize(file) {
      return Math.floor(file.size / 10000) / 100;
    },

    getUploadedFileName(fileName) {
      if (fileName.includes("__")) {
        return fileName.substring(fileName.indexOf("__") + 2);
      }
      return fileName;
    },

    removeFile(fileName) {
      for (let i = 0; i < this.fileNames.length; i++) {
        const file = this.fileNames[i];
        if (i >= 0 && i < this.fileNames.length) {
          this.fileNames.splice(i, 1);
          break;
        }
      }

      const internalFolder = this.internalFiles ? "internal/" : "";
      this.$axios
        .delete("/files/upload/" + internalFolder + fileName)
        .then(function (response) {})
        .catch(function (err) {
          console.error(err);
        });
    },

    onError(err) {
      if (err.response != null && err.response.data != null) {
        this.$noty.error(err.response.data);
      } else {
        console.error(err);
      }
    },
  },
};
</script>
