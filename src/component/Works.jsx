import React, { useEffect, useState } from 'react'
import '../style/work.css'
import About from './About';
import { Image } from 'antd';
import { collection, db, getDocs, onSnapshot, workRef } from './Firebase'



const Works = ({ children }) => {
    const [work, setWork] = useState([false]);

    useEffect(() => {
        onSnapshot(
            collection(db, "work"),
            (snapshot) => {
                getWork()

            },
            (error) => {
                alert(error)
            });

    }, [])

    const getWork = async () => {
        // setLoading(true)
        const querySnapshot = await getDocs(workRef);
        let products = []
        querySnapshot.forEach((doc) => {
            products.push({ id: doc.id, ...doc.data() })
        });
        setWork(products);
        // console.log(products[0].image);

        setTimeout(() => {
            // setLoading(false)

        })
    }


    return (
        <About>
            <div className="workContainer" id='MyWorks'>
                <h2 className='Heading'>My Works</h2>

                <div className="work-image-container ">
                    {
                        work.map((data, index) => {
                            return (
                                <div key={index}>
                                    <Image src={data.image} alt="image" className='work-images' data-aos="fade-right" style={{ width: '30em' }} />

                                </div>
                            )
                        })
                    }
                </div>

            </div>
            {children}

        </About>
    )
}

export default Works
