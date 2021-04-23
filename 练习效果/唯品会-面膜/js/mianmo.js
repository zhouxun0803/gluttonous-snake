
$(function () {
   $.ajax({
      type: "get",
      url: "js/mianmo.json",
      typeData: "json",
      success: function (res) {
         // console.log(res)
         res.mianmo.forEach(function (item, index) {
            var groups = $(".groups")
            var groupsSerson = $("<div></div>")
            groupsSerson.addClass("groups_serson")
            groupsSerson.html(`
         <h3 class="group_title">${item.tit}</h3>
        <ul class="group_content">

        </ul>
        <div class="group_operation">
           <button class="expand">
              <span>更多</span>
              <span class="glyphicon">&gt;</span>
           </button>
           <button class="multiple">+<b>多选</b></button>
        </div>
          <div class="group_commands">
             <button class="but_confirm">确定</button>
             <button class="but_cancel">取消</button>
          </div>
          `)
            groups.append(groupsSerson)
            var groupContent = document.querySelectorAll(".group_content");
            item.cons.forEach(function (i, v) {
               var li = document.createElement("li")
               li.innerHTML = (`
               <em></em>
                  <a href="#">${i}</a>
          `)
               groupContent[index].appendChild(li);
            })
         })

         var butCollapse = $(".but_collapse");
         var groupsSerson = $(".groups_serson");
         groupsSerson.eq(3).nextAll().css("display", "none");

         butCollapse.eq(1).click(function () {
            butCollapse.eq(0).css("zIndex", "1")
            $(this).css("zIndex", "0")
            groupsSerson.eq(3).nextAll().css("display", "block");
         })

         butCollapse.eq(0).click(function () {
            butCollapse.eq(1).css("zIndex", "1")
            $(this).css("zIndex", "0")
            groupsSerson.eq(3).nextAll().css("display", "none");
         })


         var multiple = $(".multiple");
         var groupOperation = $(".group_operation");
         var groupContentEm = $(".group_content li em");
         var groupContentLi = $(".group_content li");
         var groupContentA = $(".group_content li a");
         var groupContentUl = $(".group_content");
         var butConfirm = $(".group_commands .but_confirm");
         var groupCommands = $(".group_commands");
         // var itemTitle = $(".item_title");
         var itemCurrent = $(".item_current");

         multiple.click(function () {
            var index = multiple.index(this);
            groupContentEm.css("display", "none")
            var gem = groupContentUl.eq(index).children().children("em");
            groupsSerson.eq(index).css("height", "100%").siblings().css("height", "42px");
            groupOperation.eq(index).css("display", "none").siblings().css("display", "block");
            gem.css("display", "block");
            groupCommands.eq(index).css("display", "block").siblings().css("display", "block");



         })
         var butCancel = $(".but_cancel");
         butCancel.click(function () {
            var index = butCancel.index(this);
            groupsSerson.eq(index).css("height", "42px");
            groupOperation.eq(index).css("display", "block");
            groupContentEm.css("display", "none").html("");
            groupCommands.eq(index).css("display", "none");
         })
         var boo;
         var num = 0;

         groupContentLi.click(function () {
            var index = groupContentLi.index(this);
         

            if (groupContentEm.eq(index).html() != "√") {
               boo = true;
            } else {
               boo = false;
            }
            if (boo) {
               groupContentEm.eq(index).html("√")
               boo = false;
               num++
            } else {
               groupContentEm.eq(index).html("")

               boo = true;
               num--;
            }
            if (num > 0) {
               butConfirm.css({
                  background: "#f43499",
                  border: "1px solid #f43499",
                  color: "#fff",
                  cursor: "pointer"

               })

            } else {
               butConfirm.css({
                  background: "#ccc",
                  border: "1px solid #ccc",
                  color: "#999",
                  cursor: "not-allowed"
               })
            }
            
        

         })


         butConfirm.click(function () {
            var titLi = $("<li></li>");
            titLi.addClass("item_add");
            var b;
            var x = "";
            var arrtit = [];
            groupContentEm.each(function (index, item) {
               if (item.innerHTML) {
                  arrtit.push(groupContentA[index].innerHTML);
                  b = groupContentLi.eq(index).parent().prev().html();
                  groupContentA.eq(index).parent().css("display", "none")
                  console.log()
                  var gserson=groupContentA.eq(index).parent().parent();
                  console.log(gserson.children())
                  // console.log(groupContentEm.eq(index).html())
                  if(gserson.children()==null){
                     console.log(1)
                  }

               }

            })

            arrtit.forEach(function (item) {
               x = x + item + "、";
            })

            var i = $("<i>X</i>")
            var em = $("<em>&gt;</em>")
            var bb=$("<b></b>");
            bb.append(b+": ")
            titLi.append(bb)
            titLi.append(x)
            titLi.append(i);
            titLi.append(em)
            itemCurrent.before(titLi);
            groupsSerson.css("height", "42px");
            groupContentEm.css("display", "none").html("");
            groupContentEm.css("display", "none");
            groupOperation.css("display", "block");

            var itemAddI = $(".item_add i");
            var itemAdd = $(".item_add");
    
            // console.log(itemAddI)
               
            itemAddI.click(function () {
               var index = itemAddI.index(this);
               itemAdd.eq(index).remove();
               // console.log(groupContentA.eq(index).parent())
               groupContentLi.css("display","block")
            })
         })


        
       
      },
      error: function (res) {
         console.log(res)
      }

   })
})