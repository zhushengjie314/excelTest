<template>
  <div id="app">
    <el-row>
      <el-button type="primary" @click="showTable">主要按钮</el-button>
    </el-row>
    <el-dialog
      title="提示"
      :visible.sync="table"
      width="80%"
      >
      <div class="abow_dialog">
        <el-table
          :data="tableData"
          :key="itemKey"
          style="width: 100%">
          <el-table-column
            prop="name"
            label="名称"
            width="180">
          </el-table-column>
          <el-table-column
            prop="date"
            label="日期"
            width="180">
          </el-table-column>
          <el-table-column
            prop="address"
            label="路径">
          </el-table-column>
          <el-table-column
            prop="sm"
            label="说明">
          </el-table-column>
        </el-table>
        <el-upload
          class="upload-demo"
          drag
          :on-change="upload"
        auto-upload="false">
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        </el-upload>
        <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="drawerV">上传</el-button>
          <a href="static/模板.xlsx">下载模板</a>
  </span>
      </div>
    </el-dialog>
<!--    <img src="./assets/logo.png">
    <router-view/>-->
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      table: false,
      drawer: false,
      tableData: [],
      data: '',
      itemKey: undefined
    }
  },
  methods: {
    showTable () {
      this.table = true
    },
    drawerV () {
      this.tableData = [{
        name: '王小虎',
        data: '1',
        address: '上海市普陀区金沙江路 1518 弄',
        sm: 1
      }, {
        name: 'zhu1',
        data: '2',
        address: '上海市普陀区金沙江路 1518 弄',
        sm: 4
      }]
    },
    upload (file, fileList) {
      this.fileContent = file.raw
      this.importfile(this.fileContent)
    },
    importfile (obj) {
      const reader = new FileReader()
      // const _this = this
      var arr = []
      reader.readAsArrayBuffer(obj)
      reader.onload = function () {
        const buffer = reader.result
        const bytes = new Uint8Array(buffer)
        const length = bytes.byteLength
        let binary = ''
        for (let i = 0; i < length; i++) {
          binary += String.fromCharCode(bytes[i])
        }
        const XLSX = require('xlsx')
        const wb = XLSX.read(binary, {
          type: 'binary'
        })
        const outdata = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]])
        this.tableData = [...outdata]
        this.data = [...outdata]
        this.data.map(v => {
          arr.push({
            name: v.名称,
            date: new Date(v.日期),
            address: v.路径,
            sm: v.说明
          })
        })
        console.log(arr)
      }
      this.tableData = arr
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.abow_dialog {
  height: 40vh;
  overflow: auto;
}
</style>
