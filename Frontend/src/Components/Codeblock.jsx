import { TypeAnimation } from 'react-type-animation';

import CtaBtn from "./CtaBtn"
export default function Codeblock({ code ,direction ,heading ,subheading}) {

    


    return (
        <div className={` w-[1250px] flex   justify-between    ${direction}  flex-col    `}>
            <div className={`w-[600px]  flex flex-col gap-5    ` }>
                <div className=' text-richblack-5   font-semibold text-4xl'>
                    {heading}
                </div>

                <div className=' text-richblack-400'>
                 {subheading}
                </div>

                <div className=' flex gap-4 mt-5'>
                    <CtaBtn flag={true} text={"Try it Yourself"} url={""} ></CtaBtn>
                    <CtaBtn flag={false} text={"Learn More"} url={""} ></CtaBtn>
                </div>

              



            </div>
            <div className={` relative flex w-[400px] justify-start  `}>

                <div className='eclipse absolute ' >

                </div>
                <div>
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                    <p>4</p>
                    <p>5</p>
                    <p>6</p>
                    <p>7</p>
                    <p>8</p>
                    <p>9</p>
                    <p>10</p>

                </div>
                
                <TypeAnimation
                    style={{ whiteSpace: 'pre-line',color:'yellow' , height: '200px', display: 'block'  }}
                    sequence={[
                        `${code}`, // actual line-break inside string literal also gets animated in new line, but ensure there are no leading spaces
                        1000,
                        '',
                    ]}
                    repeat={Infinity}
                    omitDeletionAnimation={true}
                >


                </TypeAnimation>
            </div>




        </div>

    )
}