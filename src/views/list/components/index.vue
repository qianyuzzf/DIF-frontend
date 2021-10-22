<template>
<!--  <el-button @click.stop="add" size="small">-->
<!--    创建应用-->
<!--  </el-button>-->

<!--  <el-table :data="createModel.tableDataTemp">-->
<!--    <el-table-column-->
<!--        prop="title"-->
<!--        label="应用名称"-->
<!--        align="left"-->
<!--        width="279">-->
<!--      <template slot-scope="scope">-->
<!--        <div :style="{cursor: 'pointer'}" :id="'application_' + scope.row.id" @click.stop="openApplication(scope.row)">-->
<!--          {{ scope.row.title }}-->
<!--        </div>-->
<!--      </template>-->
<!--    </el-table-column>-->

<!--    <el-table-column-->
<!--        prop="desc"-->
<!--        align="left"-->
<!--        label="应用描述"-->
<!--        width="279">-->
<!--    </el-table-column>-->

<!--    <el-table-column-->
<!--        label="操作"-->
<!--        align="left"-->
<!--        width="150">-->
<!--      <template slot-scope="scope">-->
<!--        <el-button @click.stop="onCopy(scope.row)" size="small">-->
<!--          复制-->
<!--        </el-button>-->
<!--        <el-button @click.stop="onDel(scope.row)" size="small">-->
<!--          删除-->
<!--        </el-button>-->
<!--      </template>-->
<!--    </el-table-column>-->

<!--  </el-table>-->
</template>

<script lang="ts">
import {ref} from "vue";
import URL_CONFIG from "../../../axios/urlConfig";

export default {
  name: "ListHeader",
  components: {},
  setup(props, context) {
    const createModel = ref({
      createModal: false,
      index: 0,
      tableDataTemp: [],
      form: {
        direction: 'landscape',
      }
    })

    const add = () => {
      createModel.value.createModal = true
    }

    const openApplication = (row) => {
      window.open(`/application?appId=${row.reportId}`)
    }

    // const onCopy = (data) => {
    //   const url = URL_CONFIG['REPORT_COPY'].replace('{id}', data.id)
    //   this.axios.post(url, {
    //     userId: this.userId
    //   }).then((resp) => {
    //     this.getData()
    //   })
    // }

    console.log(context)

    return {
      createModel,
      add,
      openApplication,
      // onCopy
    }
  }
}
</script>

<style lang="scss" scoped>

</style>