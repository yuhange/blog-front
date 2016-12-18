<template>
  <div class="auth-editor">
    <div id="editor">
      <textarea :value="input" @input="update"></textarea>
      <div v-html="compiledMarkdown"></div>
    </div>
    <div class="submit">
      <button class="btn btn-primary" v-on:click="submit()">提交</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'editor',
  data(){
    return {
        input: '# hello'
    }
  },
  computed: {
    compiledMarkdown: function () {
      var marked = require('marked');
      marked.setOptions({
                renderer: new marked.Renderer(),
                gfm: true,
                tables: true,
                breaks: false,
                pedantic: false,
                sanitize: true,
                smartLists: true,
                smartypants: false,
                highlight: function (code) {
                  return require('highlight.js').highlightAuto(code).value;
                }
              });
      return marked(this.input, { sanitize: true })
    }
  },
  methods: {
      update: _.debounce(function (e) {
        this.input = e.target.value
      }, 300),
      submit() {
        var string = this.input
        string=string.replace(/\r\n/g, '\n\n')  
        string=string.replace(/\n/g, '\n\n');  
        console.log(string);
      }
    }
}
</script>

<style scoped>
#editor {
  margin: 0;
  height: 100%;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  color: #333;
  text-align: left;
  border: 0.5px solid #ddd;
}
textarea, #editor div {
  display: inline-block;
  width: 49%;
  min-height: 800px;
  vertical-align: top;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  padding: 0 20px;
}

textarea {
  border: none;
  border-right: 1px solid #ccc;
  resize: none;
  outline: none;
  background-color: #f6f6f6;
  font-size: 14px;
  font-family: 'Monaco', courier, monospace;
  padding: 20px;
}

code {
  color: #f66;
}
</style>
