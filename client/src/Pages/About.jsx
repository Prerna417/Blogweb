import React from 'react'

export default function about() {
    return (
        <div>
        <div className='m-12 w-auto h-full'>
            <div className='flex-col flex md:flex-row w-full space-y-10 mb-10'>
                <div className='md:w-1/2  mr-10 flex flex-col justify-center items-center'>
                    <h1 className='text-xl font-bold mb-2'>Welcome to Blogger's hub!</h1>
                    <p>Our platform is a vibrant community where passionate writers and curious readers come together. Here, you can create your own blog, share your unique stories, and connect with like-minded individuals. Whether you're a seasoned blogger or just starting out, our user-friendly interface makes it easy for everyone to express themselves.</p>
                </div>
                <div className='md:w-1/2  '>
                    <img src='https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2022/03/what-is-a-blog-1.webp' className='m-0'></img>
                </div>
            </div>
            <div className='flex-col flex md:flex-row w-full space-y-10 '>
                <div className='md:w-1/2 md:mr-10 order-last md:order-first mt-10 mb-10'>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAvq55MKgKkEy26do06q08sdKpzSjq7w-84wsVqEK76rB-v06pK6w9tmj9hW3VKbvbLPc&usqp=CAU' className='m-0 object-cover w-full h-full'></img>
                </div>
                <div className='md:w-1/2 flex flex-col '>
                    <h1 className='font-semibold text-2xl mb-4 '>What we offer</h1>
                    <ul className='space-y-4'>
                        <li><span className='font-semibold '>Create Your Blog:</span> Share your thoughts, experiences, and expertise with the world. Our simple and intuitive blogging tools allow you to create and publish posts effortlessly.</li>
                        <li><span className='font-semibold '>Discover and Read:</span> Explore a diverse range of blogs written by people from all walks of life. You can search for blogs by the author's name or by clicking on any category in the sidebar.</li>
                        <li><span className='font-semibold '>Connect and Engage:</span> Join a community of readers and writers. Leave comments, share your favorite posts, and follow bloggers who inspire you.</li>
                    </ul>
                </div>
            </div>
            <div className='flex-col flex md:flex-row w-full space-y-10 mb-10'>
                <div className='md:w-1/2  mr-10 flex flex-col'>
                    <h1 className='font-semibold text-2xl mb-4'>Why Choose Us?</h1>
                    <ul className='space-y-4'>
                        <li><span className='font-semibold '>User-Friendly:</span> Our platform is designed with you in mind. It's easy to navigate, whether you're writing your first post or searching for new content.</li>
                        <li><span className='font-semibold '>Community Focused:</span>  We believe in the power of community. Our platform encourages interaction, allowing you to connect with others who share your interests.</li>
                        <li><span className='font-semibold '>Variety of Content: </span> From personal stories to professional insights, our diverse categories ensure there's something for everyone.</li>
                    </ul>
                </div>
                <div className='md:w-1/2  '>
                    <img src='https://qph.cf2.quoracdn.net/main-qimg-063ff0102fa7c06db2358c3dfea03022' className='m-0 object-cover w-full h-full'></img>
                </div>
            </div>
        </div>
        <div className='bg-violet-300 p-10'>
                <h1 className='text-2xl font-bold mb-4'>Join Us Today!</h1>
                <p className='text-lg mb-4'>Start your blogging journey with us today! Sign up, create your blog, and become a part of our growing community. Whether you want to share your personal experiences, showcase your professional knowledge, or simply find inspiration, [Your Blog Website Name] is the place for you.</p>
                <div className="topLeft">
                    <i className="mr-2 text-lg cursor-pointer fa-brands fa-square-facebook"></i>
                    <i className="mr-2 text-lg cursor-pointer fa-brands fa-square-twitter"></i>
                    <i className="mr-2 text-lg cursor-pointer fa-brands fa-square-pinterest"></i>
                    <i className="mr-2 text-lg cursor-pointer fa-brands fa-square-instagram"></i>
                </div>
            </div>
        </div>
    )
}
