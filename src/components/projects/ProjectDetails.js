import React from 'react'

export default function ProjectDetails(props) {
    const id = props.match.params.id;
    return (
        <div class="container project-details">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">project dummy title -{id}</h5>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        Quae recusandae a tempora modi voluptas explicabo numquam,
                         eligendi nobis ad dolorem eaque asperiores
                         perspiciatis! Obcaecati earum quod soluta sint officia ullam?</p>
                </div>
                <div className="card-footer text-secondary">
                    <div>posted by dtoolz</div>
                    <div>10/11/2019, 10:00am</div>
                </div>
            </div>
        </div>
    )
}


