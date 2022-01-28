<template>
  <div class="app">
    <div class="container">
      <div class="row py-3">
        <div class="col-md-6">
          <h2>產品列表</h2>
          <div class="text-end">
            <button
              type="button"
              class="btn btn-outline-primary"
              style="margin-bottom: -20px"
              @click="openModal('add')"
            >
              建立新的產品
            </button>
          </div>
          <table class="table table-hover mt-4">
            <caption>
              目前有
              {{
                products.length
              }}
              項產品
            </caption>
            <thead>
              <tr>
                <th scope="col">產品名稱</th>
                <th scope="col">原價</th>
                <th scope="col" @click="ascending = !ascending">
                  售價
                  <i class="fas fa-sort"></i>
                </th>
                <th scope="col">是否啟用</th>
                <th scope="col">查看細節</th>
                <th scope="col">編輯</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in sortProducts" :key="index">
                <td>{{ item.title }}</td>
                <td>{{ item.origin_price }}</td>
                <td>{{ item.price }}</td>
                <td>
                  <span v-if="item.is_enabled" class="text-success">啟用</span>
                  <span v-else>停用</span>
                </td>
                <td>
                  <button
                    type="button"
                    class="btn btn-outline-primary"
                    @click="tempProduct = item"
                  >
                    查看細節
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    class="btn btn-outline-secondary"
                    @click="openModal('edit', item)"
                  >
                    修改
                  </button>
                  <button
                    type="button"
                    class="btn btn-outline-danger"
                    @click="openModal('delete', item)"
                  >
                    刪除
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="col-md-6">
          <h2>單一產品細節</h2>
          <div v-if="tempProduct.title">
            <div class="card mb-4">
              <img
                class="card-img-top primary-image"
                :src="tempProduct.imageUrl"
                alt="Card image cap"
              />
              <div class="card-body">
                <h5 class="card-text">
                  {{ tempProduct.name }}
                  <span class="badge bg-primary ms-2"
                    >{{ tempProduct.category }}
                  </span>
                </h5>

                <p class="card-text">
                  商品描述 :
                  {{ tempProduct.description }}
                </p>
                <p class="card-text">
                  商品內容 :
                  {{ tempProduct.content }}
                </p>
                <p class="card-text">
                  {{ tempProduct.price }}
                  <del>{{ tempProduct.origin_price }}</del>
                  個 / 元
                </p>
              </div>
            </div>
            <span v-for="(item, index) in tempProduct.imagesUrl" :key="index">
              <img :src="item" alt="" class="images m-2" style="float: left" />
            </span>
          </div>
          <p v-else>請選擇一個商品查看</p>
        </div>
      </div>
    </div>
    <!-- DleteModal head -->
    <div
      class="modal fade"
      id="deleteModal"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="deleteModalLabel">刪除產品</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">請確認是否要刪除</div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              取消
            </button>
            <button
              type="button"
              class="btn btn-primary"
              @click="deleteProduct"
            >
              確認刪除
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- DleteModal end -->

    <!-- UpdateOrAddModal head -->
    <div
      id="productModal"
      ref="productModal"
      class="modal fade"
      tabindex="-1"
      aria-labelledby="productModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-xl">
        <div class="modal-content border-0">
          <div class="modal-header bg-dark text-white">
            <h5 id="productModalLabel" class="modal-title">
              <span v-if="addProduct">新增產品</span>
              <span v-else>編輯產品</span>
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-sm-4">
                <div class="mb-3">
                  <label for="imageUrl" class="form-label">主要圖片</label>
                  <input
                    v-model="editOrAddProduct.imageUrl"
                    type="text"
                    class="form-control mb-2"
                    placeholder="請輸入圖片連結"
                  />
                  <img class="img-fluid" :src="editOrAddProduct.imageUrl" />
                </div>
                <h3 class="mb-3">多圖新增</h3>
                <div v-if="Array.isArray(editOrAddProduct.imagesUrl)">
                  <div
                    class="mb-1"
                    v-for="(image, key) in editOrAddProduct.imagesUrl"
                    :key="key"
                  >
                    <div class="mb-3">
                      <label for="imageUrl" class="form-label">圖片網址</label>
                      <input
                        v-model="editOrAddProduct.imagesUrl[key]"
                        type="text"
                        class="form-control"
                        placeholder="請輸入圖片連結"
                      />
                    </div>
                    <img class="img-fluid" :src="image" />
                  </div>
                  <div
                    v-if="
                      !editOrAddProduct.imagesUrl.length ||
                      editOrAddProduct.imagesUrl[
                        editOrAddProduct.imagesUrl.length - 1
                      ]
                    "
                  >
                    <button
                      class="btn btn-outline-primary btn-sm d-block w-100"
                      @click="editOrAddProduct.imagesUrl.push('')"
                    >
                      新增圖片
                    </button>
                  </div>
                  <div v-else>
                    <button
                      class="btn btn-outline-danger btn-sm d-block w-100"
                      @click="editOrAddProduct.imagesUrl.pop()"
                    >
                      刪除圖片
                    </button>
                  </div>
                </div>
                <div v-else>
                  <button
                    class="btn btn-outline-primary btn-sm d-block w-100"
                    @click="createImages"
                  >
                    新增圖片
                  </button>
                </div>
              </div>
              <div class="col-sm-8">
                <div class="mb-3">
                  <label for="title" class="form-label">標題</label>
                  <input
                    id="title"
                    v-model="editOrAddProduct.title"
                    type="text"
                    class="form-control"
                    placeholder="請輸入標題"
                  />
                </div>

                <div class="row">
                  <div class="mb-3 col-md-6">
                    <label for="category" class="form-label">分類</label>
                    <input
                      id="category"
                      v-model="editOrAddProduct.category"
                      type="text"
                      class="form-control"
                      placeholder="請輸入分類"
                    />
                  </div>
                  <div class="mb-3 col-md-6">
                    <label for="price" class="form-label">單位</label>
                    <input
                      id="unit"
                      v-model="editOrAddProduct.unit"
                      type="text"
                      class="form-control"
                      placeholder="請輸入單位"
                    />
                  </div>
                </div>

                <div class="row">
                  <div class="mb-3 col-md-6">
                    <label for="origin_price" class="form-label">原價</label>
                    <input
                      id="origin_price"
                      v-model.number="editOrAddProduct.origin_price"
                      type="number"
                      min="0"
                      class="form-control"
                      placeholder="請輸入原價"
                    />
                  </div>
                  <div class="mb-3 col-md-6">
                    <label for="price" class="form-label">售價</label>
                    <input
                      id="price"
                      v-model.number="editOrAddProduct.price"
                      type="number"
                      min="0"
                      class="form-control"
                      placeholder="請輸入售價"
                    />
                  </div>
                </div>
                <hr />

                <div class="mb-3">
                  <label for="description" class="form-label">產品描述</label>
                  <textarea
                    id="description"
                    v-model="editOrAddProduct.description"
                    type="text"
                    class="form-control"
                    placeholder="請輸入產品描述"
                  >
                  </textarea>
                </div>
                <div class="mb-3">
                  <label for="content" class="form-label">說明內容</label>
                  <textarea
                    id="description"
                    v-model="editOrAddProduct.content"
                    type="text"
                    class="form-control"
                    placeholder="請輸入說明內容"
                  >
                  </textarea>
                </div>
                <div class="mb-3">
                  <div class="form-check">
                    <input
                      id="is_enabled"
                      v-model="editOrAddProduct.is_enabled"
                      class="form-check-input"
                      type="checkbox"
                      :true-value="1"
                      :false-value="0"
                    />
                    <label class="form-check-label" for="is_enabled"
                      >是否啟用</label
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-outline-secondary"
              data-bs-dismiss="modal"
            >
              取消
            </button>
            <button
              type="button"
              class="btn btn-primary"
              @click="updateProduct"
            >
              確認
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- UpdateOrAddModal head -->
  </div>
</template>

<script>
import { Modal } from "bootstrap";
export default {
  name: "ProductList",
  data() {
    return {
      url: "https://vue3-course-api.hexschool.io/v2", // 請加入站點
      path: "hexschooljerry", // 請加入個人 API Path
      products: [],
      tempProduct: {},
      editOrAddProduct: {
        imagesUrl: [],
      },
      productId: "",
      sortBy: "price",
      ascending: true,
      deleteModal: null,
      productModal: null,
      addProduct: false,
    };
  },
  methods: {
    checkLogin() {
      // #3 取得 Token（Token 僅需要設定一次）
      /* eslint-disable */
      const token = document.cookie.replace(
        /(?:(?:^|.*;\s*)hexToken\s*\=\s*([^;]*).*$)|^.*$/,
        "$1"
      );
      this.axios.defaults.headers.common["Authorization"] = token;
      // #4  確認是否登入
      this.axios
        .post(`${this.url}/api/user/check`)
        .then((res) => {
          if (!res.data.success) {
            this.$router.push("/");
          }
          this.getProducts();
        })
        .catch((error) => {
          alert(error.data.message);
          this.$router.push("/");
        });
    },
    getProducts() {
      this.axios
        .get(`${this.url}/api/${this.path}/admin/products/all`)
        .then((res) => {
          this.products = Object.values(res.data.products).map((item) => item);
        })
        .catch((error) => {
          alert(error.data.message);
        });
    },
    updateProduct() {
      let url = `${this.url}/api/${this.path}/admin/product`;
      let http = "post";
      if (!this.addProduct) {
        url = `${this.url}/api/${this.path}/admin/product/${this.productId}`;
        http = "put";
      }
      this.axios[http](url, { data: this.editOrAddProduct })
        .then((response) => {
          alert(response.data.message);
          this.productModal.hide();
          this.getProducts();
        })
        .catch((err) => {
          alert(err.data.message);
        });
    },
    deleteProduct() {
      this.axios
        .delete(`${this.url}/api/${this.path}/admin/product/${this.productId}`)
        .then((res) => {
          this.getProducts();
          $("#deleteModal").modal("hide");
        })
        .catch((er) => {
          alert(er.data.message);
        });
    },
    openModal(control, item) {
      //console.log(Array.isArray(this.editOrAddProduct.imagesUrl)); // Array.isArray 若為空陣列則會為false
      if (control == "add") {
        this.addProduct = true;
        this.editOrAddProduct = {
          imagesUrl: [],
        };

        this.productModal.show();
      } else if (control == "edit") {
        this.productId = item.id;
        this.editOrAddProduct = { ...item };
        this.addProduct = false;
        this.productModal.show();
      } else if (control == "delete") {
        this.productId = item.id;
        this.deleteModal.show();
      }
    },
    createImages() {
      this.editOrAddProduct.imagesUrl = [];
      this.editOrAddProduct.imagesUrl.push("");
    },
  },
  mounted() {
    //在mounted才拿抓到DOM元素 這樣就可以在Modal使用 Data的資料
    this.deleteModal = new Modal(document.querySelector("#deleteModal"), {
      keyboard: false, //可以透過esc關閉modal false則是取消此功能  預設為true
    });
    this.productModal = new Modal(document.querySelector("#productModal"), {
      keyboard: false,
    });

    this.checkLogin();
  },
  computed: {
    sortProducts() {
      const listSort = this.products.sort((a, b) => {
        return this.ascending ? a.price - b.price : b.price - a.price;
      });
      return listSort;
    },
  },
};
</script>

<style scoped>
h2,
h5,
table,
p {
  text-align: left;
}

img {
  object-fit: contain;
  max-width: 100%;
}

.primary-image {
  height: 300px;
}

.images {
  height: 150px;
}
</style>
