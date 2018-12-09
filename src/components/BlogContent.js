import React from 'react'
import { NavLink } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'

const styles = {
  blogContentContainer: {
    marginTop: 40
  },
}
const BlogContent = props => {
  const {idx, blogs, pad} = props;
  const { id, title, content } = blogs[idx]
  

  const input = `# ${title}\n ${id} \n\n  [![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid) \n\n ${content} 
  > The overriding design goal for Markdown's
  > formatting syntax is to make it as readable
  > as possible. The idea is that a
  > Markdown-formatted document should be
  > publishable as-is, as plain text, without
  > looking like it's been marked up with tags
  > or formatting instructions.
  `
  
  return (
    <div style={Object.assign({}, styles.blogContentContainer, { paddingLeft: pad, paddingRight: pad})}>
      <NavLink to="/Blog">back</NavLink>
      <ReactMarkdown source={input}/>
    </div>
  );
};

export default BlogContent