import React, { Component } from 'react';
import './index.css';
import marked from 'marked';

class App extends Component {
  constructor(){
    super()
    this.state = {
      input: initialMarkUp
    }
    this.handleChange = this.handleChange.bind(this)
    this.createMarkup = this.createMarkup.bind(this)
  }

  handleChange(event){
    this.setState({
      input: event.target.value
    })
  }
  /* Create Markup from textarea input*/
  createMarkup() {
    const rawMarkUp = marked(this.state.input)
    return {__html: rawMarkUp};
  }
  
 render(){
    return(
      <div>
        <div className="editor-container">
          <textarea 
            className="editor"
            value={this.state.input}
            onChange={this.handleChange}
          />
        </div>

        {/* Display created MarkUp */}

        <div >
          <div dangerouslySetInnerHTML={this.createMarkup()} className="preview"/>
        </div>
      </div>
    )
  }
}

const initialMarkUp = 
  `# MarkDown Previewer
  ## This is amazing, I am Happy it is Over 
  This is a [link](http://freecodecamp.org). \n
  This is \` inline Code \` \n
  Below is a code block \n 
  \`\`\`js javascript
  function createMarkup() {
    const rawMarkUp = marked(this.state.input)
    return {__html: rawMarkUp};
  } 
  \`\`\` 
  \n
  I am hungry, I could eat 
  * Jallof Rice with dodo
  * Pounded yam and Egusi soup
  * Yam and cat fish peppersoup
  \n
  Below is a quote by me .. maybe
  > Do not cry when people don't understand where you want to go, get there and show them what you mean
  \n
  ### And below is a picture of my Beautiful face
  ![A picture of my beautiful face](https://media.licdn.com/dms/image/C5603AQFNxtDceLjLYg/profile-displayphoto-shrink_200_200/0?e=1560384000&v=beta&t=4owWGm4Fgh813Olerd484mgi4ab95en7xYKijlnox1k) \n
  **Bolded text for no reason at all**
  `


export default App;
