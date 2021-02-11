import axios from 'axios'
import React, { Component } from 'react'

class Http extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             posts:[],
             errorMsg:''
        }
    }

    componentDidMount () {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response=>{this.setState({posts: response.data})})
        .catch(error => {console.log(error)
          this.setState({errorMsg: 'Error retrieving data'})  
        })
    }
    
    render() {
        const {posts , errorMsg} = this.state
        return (
            <div>
                List of post 
                {
                    posts.length ?
                    posts.map(post => <div key ={post.id}>{post.body}</div>) :
                    null
                }
                { errorMsg ? <div>{errorMsg}</div> : null }
            </div>
        )
    }
}

export default Http
