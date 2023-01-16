import React from 'react'

const NewsList = (props) => {
  
        let { title, description, imageUrl, newsurl, source, author, date } = props
        return (
            // <div className='my-3'>
            //     <div className="card" style={{ borderColor: '#e8e6e3'}}>

            //         {/* Image of card */}
            //         <img src={imageUrl ? imageUrl : "https://thumbs.dreamstime.com/b/news-newspapers-folded-stacked-word-wooden-block-puzzle-dice-concept-newspaper-media-press-release-42301371.jpg"} className="card-img-top" alt="..."  />

            //         <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: "90%", zIndex: 1 }}>
            //             {source}
            //         </span>

            //         {/* Content inside the card */}
            //         <div className="card-body" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#0f0f0f' }}>
            //             <h5 className="card-title" style={{ color: props.mode === 'light' ? '#0f0f0f' : '#e8e6e3' }}>{title}</h5>
            //             <p className="card-text" style={{ color: props.mode === 'light' ? '#0f0f0f' : '#e8e6e3' }}>{description}...</p>
            //             <p className="card-text"><small className="text-muted">By {author} at {new Date(date).toGMTString()}</small></p>
            //             <a href={newsurl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Read More</a>
            //         </div>
            //     </div>
            // </div>

            // 2nd 
            <div className="card mb-3 shadow" >
                <div className="row g-0">
                    <div className="col-md-4" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#0f0f0f' }}>
                        <img src={imageUrl ? imageUrl : "https://thumbs.dreamstime.com/b/news-newspapers-folded-stacked-word-wooden-block-puzzle-dice-concept-newspaper-media-press-release-42301371.jpg"} className="card-img-top" alt="..." height={"268px"} width={"320"} />
                        {/* <img src="..." className="img-fluid rounded-start" alt="..." /> */}
                        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: "90%", zIndex:1}}>
                        {source}
                    </span> 
                    </div>
                    <div className="col-md-8" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#0f0f0f' }}>
                        <div className="card-body" >
                            <div className="card-body" >
                                <h5 className="card-title" style={{ color: props.mode === 'light' ? '#44444d' : '#e8e6e3' }}>{title}</h5>
                                <p className="card-text" style={{ color: props.mode === 'light' ? '#44444d' : '#e8e6e3' }}>{description}...</p>
                                <p className="card-text"><small className="text-muted">By {author?author:"Unknow"} at {new Date(date).toGMTString()}</small></p>
                                <a href={newsurl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
}

export default NewsList

// {new Date(date).toGMTString()}
// #0f0f0f , new #44444d --> black color
// #e8e6e3 --> white color
