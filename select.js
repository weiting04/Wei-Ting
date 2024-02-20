const select = document.querySelectorAll(".select");
const form = document.getElementById("f1");
console.log(select.length);
function creatnewselect() {
  for (let j = 0; j < select.length; j++) {
    const container = document.createElement("div");
    container.classList.add("select");
    //選單預設文字
    const formtext = document.createElement("div");
    const label = document.createElement("label");
    label.innerHTML = "請選擇項目";
    formtext.appendChild(label);
    formtext.classList.add("text");
    container.appendChild(formtext);
    for (let i = 0; i < select[j].childElementCount; i++) {
      //將select元素內的選項複製過來
      const newitem = document.createElement("div");
      const box = document.createElement("input");
      const text = select[j].children[i].innerHTML;
      const name = select[j].children[i].getAttribute("name");
      //用checkbok代替select
      box.setAttribute("type", "checkbox");
      box.setAttribute("value", text);
      box.setAttribute("name", name);
      newitem.appendChild(box);
      const span = document.createElement("span");
      span.innerHTML = text;
      newitem.appendChild(span);
      newitem.classList.add("item");
      container.appendChild(newitem);
    }
    //移除舊的select
    form.removeChild(select[j]);
    form.appendChild(container);
    //設定點擊事件
    setclickevet(container);
  }
  const submit = document.createElement("input");
  submit.setAttribute("type", "submit");
  submit.setAttribute("value", "提交");
  submit.classList.add("btn");
  form.appendChild(submit);
}
function setclickevet(container) {
  console.log(container);
  for (let i = 0; i < container.childElementCount; i++) {
    const option = container.children[i];
    option.addEventListener("click", () => {
      let labeltext = "";
      console.log(option);
      const name = option.children[0].getAttribute("name");
      console.log(name);
      const checked = document.querySelectorAll(
        `.select .item input[name=${name}]:checked`
      );
      checked.forEach((item) => {
        console.log(item);
        if (labeltext !== "") {
          labeltext += ",";
        }

        labeltext += item.value;
      });
      console.log(labeltext);
      if (labeltext === "") labeltext = "請選擇項目";
      container.children[0].innerHTML = labeltext;
    });
  }
}
creatnewselect();
//隱藏舊的select選單;
//document.getElementById("s1").style.display = "none";
