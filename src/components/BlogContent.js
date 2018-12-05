import React from 'react'
import { NavLink } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'

const styles = {
  blogContentContainer: {
    margin: 100
  },
}
const BlogContent = props => {
  const {idx, blogs} = props;
  const { id, title, content } = blogs[idx]
  const input = `# ${title}\n ${id} \n\n  [![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid) \n\n ${content}`
  
  return (
    <div style={styles.blogContentContainer}>
      <NavLink to="/Blog">back</NavLink>
      <ReactMarkdown source={input}/>
    </div>
  );
};

export default BlogContent