const syntaxHighlights=()=>{
    var ca = document.getElementById("content2");
    const keywords = [
        'and',
        'null',
        'true',
        'loggedInUser',
        'wherecontains',
        'touniformstring',
        'tointeger',
        'now',
        'false',
        'if',
        'else',
        'index',
        'count',
        'not',
        'tointeger',
        'toboolean',
        'tostring',
        'insert',
        'remove',
        'append'
      ];
      
    // Create a pattern that adds \b at the start and end of each keyword
    const pattern = new RegExp(`\\b(${keywords.join('|')})\\b`, 'g');
    // var keywords_regex = /(and|\bnull\b|true|loggedInUser|wherecontains|touniformstring|tointeger|now|false|if|else|index|count|not|tointeger|toboolean|tostring|insert|remove|append)/g;
    var data = ca.innerHTML;
    // data = data.replace(/&lt;(.*?)&gt;/g, `<span class='code-elem'>&lt;$1&gt;</span>`);
    data = data.replace(/((type|rule|a|cons)!\w+)/g, `<span class='code-keywords'>$1</span>`);
    data = data.replace(/(\w+!\w+\.\w+)/g, `<span class='rule-inputs'>$1</span>`);
    data = data.replace(/(\w+!\w+)/g, `<span class='rule-inputs'>$1</span>`);
    data = data.replace(/(\w+:)/g, `<span class='code-key'>$1</span>`);
    
    data = data.replace(pattern,`<span class='keywords'>$1</span>`);
    data = data.replace(/\*\//g, `*/</span>`);
    data = data.replace(/\/\*/g, `<span class='code-comment'>/*`);
    data = data.replace(/"(.*?)"/g, `<span class='code-str'>&quot;$1&quot;</span>`);
    // data = data.replace(/\/\*(.*?)\*\//g, `<span class='code-comment'>/*$1*/</span>`);
    
    // data = data.replace(/(.*?):/g, `<span class="code-key">$1:</span>`);
    ca.innerHTML = data;    
}


const syntaxHighlightsUIDFlex=()=>{
  var ba = document.getElementsByClassName("code-content");
  const keywords = [
      'and',
      'null',
      'true',
      'loggedInUser',
      'wherecontains',
      'touniformstring',
      'tointeger',
      'now',
      'false',
      'if',
      'else',
      'index',
      'count',
      'not',
      'tointeger',
      'toboolean',
      'tostring',
      'insert',
      'remove',
      'append',
      'char',
      'today',
      'day',
      'weekday'
    ];
    
  // Create a pattern that adds \b at the start and end of each keyword
  const pattern = new RegExp(`\\b(${keywords.join('|')})\\b`, 'g');
  // var keywords_regex = /(and|\bnull\b|true|loggedInUser|wherecontains|touniformstring|tointeger|now|false|if|else|index|count|not|tointeger|toboolean|tostring|insert|remove|append)/g;
  for(let i = 0; i<ba.length; i++){
    ca = ba[i];
    var data = ca.innerHTML;
    data = data.replace(/((type|rule|a|cons)!\w+)/g, `<span class='code-keywords'>$1</span>`);
    data = data.replace(/(\w+!\w+\.\w+)/g, `<span class='rule-inputs'>$1</span>`);
    data = data.replace(/(\w+!\w+)/g, `<span class='rule-inputs'>$1</span>`);
    data = data.replace(/(\w+:)/g, `<span class='code-key'>$1</span>`);
    data = data.replace(/\b(\d+)\b/g, `<span class='code-key'>$1</span>`);
    data = data.replace(/(\{|\(|\[|\}|\)|\])/g, `<span class='code-orange'>$1</span>`);
    
    data = data.replace(pattern,`<span class='keywords'>$1</span>`);
    data = data.replace(/\*\//g, `*/</span>`);
    data = data.replace(/\/\*/g, `<span class='code-comment'>/*`);
    data = data.replace(/"(.*?)"/g, `<span class='code-str'>&quot;$1&quot;</span>`);

    ca.innerHTML = data;   
  }
}


const xsdSyntaxHighlights=()=>{
    var ca = document.getElementById("content2");
    var data = ca.innerHTML;
    data = data.replace(/"(.*?)"/g, `<span class='code-str'>&quot;$1&quot;</span>`);
    data = data.replace(/&lt;(.*?)&gt;/g, `<span class='code-elem'>&lt;$1&gt;</span>`);
    data = data.replace(/\/\*(.*?)\*\//g, `<span class='code-comment'>/* $1 */</span>`);
    data = data.replace(/\@(\w+)/g, `<span class='xsd-keywords'>@$1</span>`);
    // data = data.replace(/(.*?):/g, `<span class="code-key">$1:</span>`);
    ca.innerHTML = data;
}

const syntaxHighlightsVerticalNav=()=>{
    var ca = document.getElementById("vertical-nav");
    const keywords = [
        'and',
        'null',
        'true',
        'loggedInUser',
        'wherecontains',
        'touniformstring',
        'tointeger',
        'now',
        'false',
        'if',
        'else',
        'index',
        'count',
        'not',
        'tointeger',
        'toboolean',
        'tostring',
        'insert',
        'remove',
        'append',
      ];
      
    // Create a pattern that adds \b at the start and end of each keyword
    const pattern = new RegExp(`\\b(${keywords.join('|')})\\b`, 'g');
    // var keywords_regex = /(and|\bnull\b|true|loggedInUser|wherecontains|touniformstring|tointeger|now|false|if|else|index|count|not|tointeger|toboolean|tostring|insert|remove|append)/g;
    var data = ca.innerHTML;
    // data = data.replace(/&lt;(.*?)&gt;/g, `<span class='code-elem'>&lt;$1&gt;</span>`);
    data = data.replace(/((type|rule|a|cons)!\w+)/g, `<span class='code-keywords'>$1</span>`);
    data = data.replace(/(\w+!\w+\.\w+)/g, `<span class='rule-inputs'>$1</span>`);
    data = data.replace(/(\w+!\w+)/g, `<span class='rule-inputs'>$1</span>`);
    data = data.replace(/(\w+:)/g, `<span class='code-key'>$1</span>`);
    data = data.replace(/(\,)/g, `<span class='code-white'>$1</span>`);
    
    data = data.replace(pattern,`<span class='keywords'>$1</span>`);
    data = data.replace(/\*\//g, `*/</span>`);
    data = data.replace(/\/\*/g, `<span class='code-comment'>/*`);
    data = data.replace(/"(.*?)"/g, `<span class='code-str'>&quot;$1&quot;</span>`);
    data = data.replace(/\@(\w+)/g, `<span style='color:#fff'>$1</span>`);
    // data = data.replace(/\/\*(.*?)\*\//g, `<span class='code-comment'>/*$1*/</span>`);
    
    // data = data.replace(/(.*?):/g, `<span class="code-key">$1:</span>`);
    ca.innerHTML = data;    
}