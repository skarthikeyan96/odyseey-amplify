import { getPost, listPosts } from "@/graphql/queries"
import { API } from "aws-amplify"
import { GetStaticPaths, GetStaticProps } from "next"

const Post = ({post}: any) => {

    return (
        <> 
           <h1>  {post.name} </h1>
        </>
    )
}


export const getStaticPaths:GetStaticPaths = async () => {


    const postsData: any = await API.graphql({
        query: listPosts
    })

    const paths = postsData.data.listPosts.items.map((post: any) => ({params: {id: post.id.toString()}}))
    return{
        paths,
        fallback: true
    }
}

export const getStaticProps: GetStaticProps = async ({params}: any) => {
    const {id} = params;
    const postsData: any = await API.graphql({
        query: getPost,
        variables: {id}
    })

    return {
        props: {
            post: postsData.data.getPost
        }
    }
}


export default Post;