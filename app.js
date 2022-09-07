
new Vue({
    el: "#root",
    data:{

            myList: [],
            activity: "",
            haveDone: [],
        
    },
    methods: {
        backUpData: function () {
          localStorage.setItem("key", JSON.stringify(this.myList));
        },
        insertData: function () {
          if (this.activity.length === 0) {
            alert("Enter you daily activties");
            return;
          }
          let result = {
            text: this.activity,
            completed: false,
          };
          this.myList = [...this.myList, result];
          this.backUpData();
          this.activity = "";
        },
        deleteData: function (text) {
          this.myList = this.myList.filter((data) => {
            return data != text;
          });
          this.backUpData();
        },
      },
      computed: {
        completeWork: function () {
          return this.myList.filter((data) => {
            return data.completed;
          });
        },
      },
      created() {
        let render = JSON.parse(localStorage.getItem("key"));
        if (render) {
          this.myList = render;
        }
      },
  });