/*! License information can be found in post-editor.js.LICENSE.txt */
!function(){const{Component:e,render:t}=wp.element,{Spinner:s,RadioControl:a,TextControl:n,Button:o}=wp.components,{__:__}=wp.i18n,{apiFetch:r}=wp;class l extends e{constructor(e){super(e),this.state={loading:!1,post:null},this.fetching=!1}componentDidMount(){!this.state.post&&0<this.props.postId&&this.fetch()}componentDidUpdate(){this.fetch()}fetch(){if(this.fetching)return;const{postId:e}=this.props;this.fetching=!0,e?this.setState({loading:!0},(()=>{r({path:`taro-series/v1/available/${this.props.postType}?p=${e}`}).then((e=>{this.setState({loading:!1,post:e[0]},(()=>{this.fetching=!1}))})).catch((()=>{this.setState({loading:!1,post:null},(()=>{this.fetching=!1}))}))})):this.setState({post:null,loading:!1},(()=>{this.fetching=!1}))}render(){const{loading:e,post:t}=this.state,{onChange:a}=this.props;let n=!1,r="";t?(n=t.edit_link,r=t.title):r=0<this.props.postId?__("Loading…","taro-series"):__("Not Set","taro-series");const l={display:"block",margin:"10px 0",padding:"5px",fontWeight:"bold"};return React.createElement(React.Fragment,null,React.createElement("div",{className:"taro-series-selector-item"},e&&React.createElement(s,null),n?React.createElement(React.Fragment,null,React.createElement("a",{style:l,href:n,target:"_blank",rel:"noopener noreferrer"},r),React.createElement("br",null),React.createElement(o,{isSmall:!0,isDestructive:!0,onClick:()=>{a(0)}},__("Leave Out","taro-series"))):React.createElement("span",{style:l,className:"taro-series-link taro-series-link-invalid"},r)))}}class i extends e{constructor(e){super(e),this.state={loading:!1,posts:[],orderby:"DESC",s:""}}calculate(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;const{postId:t}=this.props;return null!==e&&e.length&&e.filter((e=>e.id===t)).length?t:0}componentDidMount(){this.fetch()}fetch(){this.setState({loading:!0},(()=>{r({path:`taro-series/v1/available/${this.props.postType}?s=${this.state.s}`}).then((e=>{this.setState({loading:!1,posts:e})})).catch((()=>{this.setState({loading:!1,posts:[]})}))}))}render(){const{onChange:e}=this.props,{loading:t,posts:r,s:l}=this.state,i=[];if(t&&i.push(React.createElement(s,null)),r.length){const t=this.calculate(r),s=[];t||s.push({value:0,label:__("No Change","taro-series")}),r.forEach((e=>{s.push({value:parseInt(e.id,10),label:e.title})})),i.push(React.createElement(a,{label:__("Select Series assigned to","taro-series"),selected:t,onChange:e,options:s}))}else t?i.push(React.createElement("p",{className:"description"},__("Loading…","taro-series"))):i.push(React.createElement("p",{className:"description"},__("No series found matches criteria.","taro-series")));return i.push(React.createElement(React.Fragment,null,React.createElement("hr",null),React.createElement(n,{label:__("Search Series","taro-series"),value:l,onChange:e=>this.setState({s:e})}),React.createElement(o,{isSmall:!0,isDefault:!0,onClick:()=>{this.fetch()}},__("Filter","taro-series")))),i}}class c extends e{constructor(e){super(e),this.state={postId:parseInt(e.postId,10)}}render(){const{postId:e}=this.state,t=e=>{this.setState({postId:parseInt(e,10)})};return React.createElement(React.Fragment,null,React.createElement("input",{type:"hidden",name:"taro-series-parent",value:e}),React.createElement(l,{postId:e,postType:this.props.postType,onChange:e=>t(e)}),React.createElement("hr",null),React.createElement(i,{postId:e,postType:this.props.postType,onChange:e=>t(e)}))}}const p=document.getElementById("taro-series-selector");p&&t(React.createElement(c,{postId:p.dataset.postId,postType:p.dataset.postType}),p)}();