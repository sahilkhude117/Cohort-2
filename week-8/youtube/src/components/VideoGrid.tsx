import { VideoCard } from "./VideoCard"

const VIDEOS = [{
    title:"Kantara - Singara Siriye |Vijay Prakash|Ananya Bhat |Ajaneesh Loknath |Rishab Shetty|Hombale Films",
    image:"/VarahRoopam.jpg",
    author:"Hombale Films",
    ThumbImage:"/VarahRoopam.jpg",
    timestamp:"2 years ago",
    views:"72M",
},{
    title:"Kantara - Singara Siriye |Vijay Prakash|Ananya Bhat |Ajaneesh Loknath |Rishab Shetty|Hombale Films",
    image:"/VarahRoopam.jpg",
    author:"Hombale Films",
    ThumbImage:"/VarahRoopam.jpg",
    timestamp:"2 years ago",
    views:"72M",
},{
    title:"Kantara - Singara Siriye |Vijay Prakash|Ananya Bhat |Ajaneesh Loknath |Rishab Shetty|Hombale Films",
    image:"/VarahRoopam.jpg",
    author:"Hombale Films",
    ThumbImage:"/VarahRoopam.jpg",
    timestamp:"2 years ago",
    views:"72M",
},{
    title:"Kantara - Singara Siriye |Vijay Prakash|Ananya Bhat |Ajaneesh Loknath |Rishab Shetty|Hombale Films",
    image:"/VarahRoopam.jpg",
    author:"Hombale Films",
    ThumbImage:"/VarahRoopam.jpg",
    timestamp:"2 years ago",
    views:"72M",
},{
    title:"Kantara - Singara Siriye |Vijay Prakash|Ananya Bhat |Ajaneesh Loknath |Rishab Shetty|Hombale Films",
    image:"/VarahRoopam.jpg",
    author:"Hombale Films",
    ThumbImage:"/VarahRoopam.jpg",
    timestamp:"2 years ago",
    views:"72M",
},{
    title:"Kantara - Singara Siriye |Vijay Prakash|Ananya Bhat |Ajaneesh Loknath |Rishab Shetty|Hombale Films",
    image:"/VarahRoopam.jpg",
    author:"Hombale Films",
    ThumbImage:"/VarahRoopam.jpg",
    timestamp:"2 years ago",
    views:"72M",
},{
    title:"Kantara - Singara Siriye |Vijay Prakash|Ananya Bhat |Ajaneesh Loknath |Rishab Shetty|Hombale Films",
    image:"/VarahRoopam.jpg",
    author:"Hombale Films",
    ThumbImage:"/VarahRoopam.jpg",
    timestamp:"2 years ago",
    views:"72M",
},{
    title:"Kantara - Singara Siriye |Vijay Prakash|Ananya Bhat |Ajaneesh Loknath |Rishab Shetty|Hombale Films",
    image:"/VarahRoopam.jpg",
    author:"Hombale Films",
    ThumbImage:"/VarahRoopam.jpg",
    timestamp:"2 years ago",
    views:"72M",
},{
    title:"Kantara - Singara Siriye |Vijay Prakash|Ananya Bhat |Ajaneesh Loknath |Rishab Shetty|Hombale Films",
    image:"/VarahRoopam.jpg",
    author:"Hombale Films",
    ThumbImage:"/VarahRoopam.jpg",
    timestamp:"2 years ago",
    views:"72M",
},{
    title:"Kantara - Singara Siriye |Vijay Prakash|Ananya Bhat |Ajaneesh Loknath |Rishab Shetty|Hombale Films",
    image:"/VarahRoopam.jpg",
    author:"Hombale Films",
    ThumbImage:"/VarahRoopam.jpg",
    timestamp:"2 years ago",
    views:"72M",
},{
    title:"Kantara - Singara Siriye |Vijay Prakash|Ananya Bhat |Ajaneesh Loknath |Rishab Shetty|Hombale Films",
    image:"/VarahRoopam.jpg",
    author:"Hombale Films",
    ThumbImage:"/VarahRoopam.jpg",
    timestamp:"2 years ago",
    views:"72M",
},{
    title:"Kantara - Singara Siriye |Vijay Prakash|Ananya Bhat |Ajaneesh Loknath |Rishab Shetty|Hombale Films",
    image:"/VarahRoopam.jpg",
    author:"Hombale Films",
    ThumbImage:"/VarahRoopam.jpg",
    timestamp:"2 years ago",
    views:"72M",
},{
    title:"Kantara - Singara Siriye |Vijay Prakash|Ananya Bhat |Ajaneesh Loknath |Rishab Shetty|Hombale Films",
    image:"/VarahRoopam.jpg",
    author:"Hombale Films",
    ThumbImage:"/VarahRoopam.jpg",
    timestamp:"2 years ago",
    views:"72M",
},{
    title:"Kantara - Singara Siriye |Vijay Prakash|Ananya Bhat |Ajaneesh Loknath |Rishab Shetty|Hombale Films",
    image:"/VarahRoopam.jpg",
    author:"Hombale Films",
    ThumbImage:"/VarahRoopam.jpg",
    timestamp:"2 years ago",
    views:"72M",
},{
    title:"Kantara - Singara Siriye |Vijay Prakash|Ananya Bhat |Ajaneesh Loknath |Rishab Shetty|Hombale Films",
    image:"/VarahRoopam.jpg",
    author:"Hombale Films",
    ThumbImage:"/VarahRoopam.jpg",
    timestamp:"2 years ago",
    views:"72M",
}]


export function VideoGrid(){
    return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {VIDEOS.map(video => <div>
            <VideoCard title={video.title}
                 image={video.image}
                 author={video.author}
                 ThumbImage={video.ThumbImage}
                 timestamp={video.timestamp}
                 views={video.views}
                 />
        </div>)}
    </div>
}