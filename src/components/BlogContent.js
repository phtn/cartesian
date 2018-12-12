import React from 'react'
import { NavLink } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'

const styles = {
  blogContentContainer: {
    marginTop: 40
  },
  input: {
    fontSize: '2.3em'
  }
}
const BlogContent = props => {
  const {idx, blogs, pad} = props;
  const { author, content, createdAt, title } = blogs[idx]
  

  const input = `# ${title}\n ${author} | ${createdAt} \n\n  [![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid) \n\n ${content} `
  
  return (
    <div style={Object.assign({}, styles.blogContentContainer, { paddingLeft: pad, paddingRight: pad})}>
      <NavLink to="/Blog">back</NavLink>
      <ReactMarkdown source={input} style={styles.input}/>
    </div>
  );
};

export default BlogContent