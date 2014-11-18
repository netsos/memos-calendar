define(["jquery","underscore","backbone","../../helpers/template","models/memo","collections/memos"],function(a,b,c,d,e,f){"use strict";return c.View.extend({tagName:"form",className:"form",template:d.template("memoFormTemplate"),events:{"click .modal, .modal__close":"close"},initialize:function(c){this.data={date:{year:c.data("year"),month:c.data("month"),day:c.data("day")}},this.$el.on("click",".button_type_submit",b.bind(function(){this.findedMemo?this.updateMemo():this.createMemo(),this.body.removeClass("modal-wrap"),this.remove()},this)),this.findedMemo=f.find(function(a){var b=a.get("date").year===this.data.date.year,c=a.get("date").month===this.data.date.month,d=a.get("date").day===this.data.date.day;return b&&c&&d},this),this.data.button_text=this.findedMemo?"Update memo":"Create memo",this.body=a("body").addClass("modal-wrap")},updateMemo:function(){var a=this.newAttributes();return this.findedMemo.set({description:a.memo}),!1},createMemo:function(){var a,b=this.newAttributes();return a=new e({date:this.data.date,description:b.memo}),f.create(a),!1},newAttributes:function(){var a=this.$el.serializeArray(),c={};return b.each(a,function(a){c[a.name]=a.value.trim()}),c},close:function(a){return a.target===a.currentTarget&&(this.body.removeClass("modal-wrap"),this.remove()),!1},render:function(){var a=this.findedMemo&&this.findedMemo.get("description")||"";return this.$el.html(this.template(this.data)),this.$(".field__input[name=memo]").val(a),this}})});