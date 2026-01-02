import React from 'react'

const TopPosts = ({ posts }) => {
    return (
        <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Posts</h3>
            <ol className="space-y-3">
                {posts?.map((post, index) => (
                    <li key={index} className="flex items-start space-x-3">
                        <span className="flex-shrink-0 w-6 h-6 text-black text-xs font-semibold rounded-full flex items-center justify-center">
                            {index + 1}
                        </span>
                        <span className="text-sm text-gray-600 leading-5">
                            {post.title}
                        </span>
                    </li>
                ))}
            </ol>
        </div>
    )
}

export default TopPosts
