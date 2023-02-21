import Head from 'next/head';
import Image from 'next/image';
import { reactjs, nextjs, gatsbyjs, javascript, typescript } from '../../images/extra-pics';
import pic1 from '../../images/pic1.jpg';
import pic2 from '../../images/pic2.jpg';
//COMPONENT
import { Header } from '../../components';
//MATERIAL-UI
import useMediaQuery from '@mui/material/useMediaQuery';
import Grid from '@mui/material/Grid';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
//REACT-REVEAL
import Zoom from 'react-reveal/Zoom';
import Flip from 'react-reveal/Flip';
import LightSpeed from 'react-reveal/LightSpeed';
import Slide from 'react-reveal/Slide';


type HomeProps = {
    title: string;
    images: Array<any>;
}

function Home({ title, images }: HomeProps) {
    const screen1100 = useMediaQuery('(max-width: 1100px)');
    const screen1076 = useMediaQuery('(min-width: 1076px)');
    const screen933 = useMediaQuery('(min-width: 933px)');
    const screen863 = useMediaQuery('(min-width: 863px)');
    const screen840 = useMediaQuery('(min-width: 840px)');
    const screen770 = useMediaQuery('(min-width: 770px)');
    const screen700 = useMediaQuery('(max-width: 700px)');
    const screen640 = useMediaQuery('(min-width: 640px)');
    const screen641 = useMediaQuery('(min-width: 641px)');
    const screen450 = useMediaQuery('(max-width: 450px)');
    const screen400 = useMediaQuery('(max-width: 400px)');
    const screen370 = useMediaQuery('(max-width: 370px)');
    const screen360 = useMediaQuery('(max-width: 360px)');
    const screen320 = useMediaQuery('(max-width: 320px)');
    const screen300 = useMediaQuery('(max-width: 300px)');
    const screen260 = useMediaQuery('(max-width: 260px)');


    return (
        <>
            <Head>
                <title> {title} | Portfolio </title>
            </Head>

            <Header
            />

            <div className="bg-white overflow-hidden">
                <main style={{ marginTop: screen640 ? "1.175rem" : "" }}>
                    <div className="relative">
                        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100"></div>
                        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                            <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
                                <div className="absolute inset-0">
                                    <Zoom duration={1300}><img className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100" /></Zoom>
                                    <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-700 mix-blend-multiply"></div>
                                </div>

                                <div className={`relative px-4 py-16 sm:px-6 sm:py-24 lg:py-24 lg:px-8 ${screen370 && `ml-2`}`}>
                                    <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl cursor-default myHoverEffect4">
                                        <Zoom duration={1300}><span className="block text-white tracking-wide selection:bg-transparent" style={{ wordSpacing: "0.105rem" }}>{!screen260 && `Muhammad`} Ali Sarwar</span></Zoom>
                                        <Flip duration={1300} top><span className="block text-indigo-200 tracking-wide mt-3.5 selection:bg-transparent" style={{ wordSpacing: "0.105rem" }}>&ldquo; Software Engineer &rdquo;</span></Flip>
                                    </h1>

                                    <Flip duration={1300} top>
                                        <p className="mt-8 max-w-lg mx-auto text-center text-xl text-indigo-200 sm:max-w-3xl flex align-middle justify-center">
                                            {  //above 450
                                                !screen450 && (
                                                    <>
                                                        <h4 className="cursor-pointer selection:bg-transparent shadow-xl shadow-cyan-800 myHoverEffect1"> <span className="badge bg-primary text-white p-4"> Website Developer </span> </h4>
                                                        <h6 className="cursor-pointer selection:bg-transparent p-3"> <b>|</b> </h6>
                                                        <h4 className="cursor-pointer selection:bg-transparent shadow-xl shadow-green-800 myHoverEffect1"> <span className="badge bg-success text-white p-4"> Full Stack Developer </span> </h4>
                                                        <h6 className="cursor-pointer selection:bg-transparent p-3"> <b>|</b> </h6>
                                                        <h4 className="cursor-pointer selection:bg-transparent shadow-xl shadow-red-800 myHoverEffect1"> <span className="badge bg-danger text-white p-4"> Cloud Developer </span> </h4>
                                                    </>
                                                )
                                            }
                                            {  //below 450 & above 400
                                                (screen450 && !screen400) && (
                                                    <>
                                                        <h5 className="cursor-pointer selection:bg-transparent shadow-xl shadow-cyan-800 myHoverEffect1"> <span className="badge bg-primary text-white p-4"> Website Developer </span> </h5>
                                                        <h6 className="cursor-pointer selection:bg-transparent p-3"> <b>|</b> </h6>
                                                        <h5 className="cursor-pointer selection:bg-transparent shadow-xl shadow-green-800 myHoverEffect1"> <span className="badge bg-success text-white p-4"> Full Stack Developer </span> </h5>
                                                        <h6 className="cursor-pointer selection:bg-transparent p-3"> <b>|</b> </h6>
                                                        <h5 className="cursor-pointer selection:bg-transparent shadow-xl shadow-red-800 myHoverEffect1"> <span className="badge bg-danger text-white p-4"> Cloud Developer </span> </h5>
                                                    </>
                                                )
                                            }
                                            {  //below 400 & above 370
                                                (screen400 && !screen370) && (
                                                    <>
                                                        <h6 className="cursor-pointer selection:bg-transparent shadow-xl shadow-cyan-800 myHoverEffect1"> <span className="badge bg-primary text-white p-4"> Website Developer </span> </h6>
                                                        <h6 className="cursor-pointer selection:bg-transparent p-3"> <b>|</b> </h6>
                                                        <h6 className="cursor-pointer selection:bg-transparent shadow-xl shadow-green-800 myHoverEffect1"> <span className="badge bg-success text-white p-4"> Full Stack Developer </span> </h6>
                                                        <h6 className="cursor-pointer selection:bg-transparent p-3"> <b>|</b> </h6>
                                                        <h6 className="cursor-pointer selection:bg-transparent shadow-xl shadow-red-800 myHoverEffect1"> <span className="badge bg-danger text-white p-4"> Cloud Developer </span> </h6>
                                                    </>
                                                )
                                            }
                                            {  //below 370
                                                screen370 && (
                                                    <div className="w-100 flex align-middle justify-center">
                                                        <div style={{ margin: "0 auto" }}>
                                                            <h6 className="cursor-pointer selection:bg-transparent myHoverEffect1 w-96 text-2xl border-8 border-double border-transparent p-1"> <span className="w-full badge bg-primary text-white p-4"> Website Developer </span> </h6>
                                                            <h6 className="cursor-pointer selection:bg-transparent myHoverEffect1 mt-0.5 w-96 text-2xl border-8 border-double border-transparent p-1"> <span className="w-full badge bg-success text-white p-4"> Full Stack Developer </span> </h6>
                                                            <h6 className="cursor-pointer selection:bg-transparent myHoverEffect1 mt-0.5 w-96 text-2xl border-8 border-double border-transparent p-1"> <span className="w-full badge bg-danger text-white p-4"> Cloud Developer </span> </h6>
                                                        </div>
                                                    </div>
                                                )
                                            }
                                        </p>
                                    </Flip>

                                    <LightSpeed duration={1300}>
                                        <Grid container spacing={2} className="flex align-middle justify-center">
                                            {
                                                images.map((img, i) => (
                                                    <Grid key={i} item xs={screen370 ? 3 : 2} className="flex align-middle justify-center">
                                                        <div style={{ width: "3.125rem", height: "3.125rem" }} className="myHoverEffect2">
                                                            <Image src={img} />
                                                        </div>
                                                    </Grid>
                                                ))
                                            }
                                        </Grid>
                                    </LightSpeed>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={`bg-gray-100 ${screen400 && `hidden`}`}>
                        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                            <LightSpeed duration={1300}>
                                <p className={`text-center font-semibold text-gray-500 tracking-wider cursor-default selection:bg-transparent ${screen320 && `ml-2.5`} ${screen320 ? `text-lg` : `text-xl`} ${screen300 && `hidden`}`} style={{ wordSpacing: "0.125rem" }}>
                                    &ldquo; {screen300 ? `Trust me now place your desired order` : `You can trust me now to place your desired order`} &rdquo;
                                </p>
                            </LightSpeed>

                            <div className={`${screen700 ? `mt-16` : `mt-14`} flex align-middle justify-around`}>
                                <div className={`mt-2.5 cursor-pointer ${!screen700 && `myHoverEffect3`} selection:bg-transparent`}>
                                    <Zoom duration={1300}>
                                        <Image width="328.2875rem" height="111.025rem" src={reactjs} />
                                    </Zoom>
                                </div>
                                <div className={`cursor-pointer myHoverEffect3 ${screen700 && `hidden`} selection:bg-transparent`}>
                                    <Zoom duration={1300}>
                                        <Image width="249.2875rem" height="129.025rem" src={nextjs} />
                                    </Zoom>
                                </div>
                                <div className={`mt-3 cursor-pointer myHoverEffect3 ${screen1100 && `hidden`} selection:bg-transparent`}>
                                    <Zoom duration={1300}>
                                        <Image width="342.2875rem" height="94.025rem" src={gatsbyjs} />
                                    </Zoom>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>

                <div className="bg-white">
                    <div className={`${screen400 ? `bg-gray-100` : `bg-black`} z-10 lg:relative p-1.5 ${screen1076 ? `pb-2` : screen863 ? `pb-0` : ``} md:h-100 lg:h-full`}>
                        <div className={`mx-auto max-w-7xl px-8 ${screen840 ? `grid grid-cols-3 gap-8` : `flex align-middle justify-center flex-col`}`}>
                            <Zoom duration={1300}>
                                {
                                    screen840 ? (
                                        <div className="relative md:-my-10 lg:-my-8">
                                            <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:p-0 lg:h-96 mt-14">
                                                <div className={`aspect-w-10 aspect-h-6 shadow-xl overflow-hidden sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full lg:rounded-xl ${!screen863 && `mt-12`}`}>
                                                    <Image className="object-cover lg:h-full lg:w-full cursor-pointer myHoverEffect3" src={pic1} />
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <div style={{ margin: "0 auto" }}>
                                            <div className="align-middle mt-24 h-80 w-64">
                                                <Image className="inline-block rounded-md" src={pic2} />
                                            </div>
                                        </div>
                                    )
                                }
                            </Zoom>
                            <div className="mt-12 m-0 col-span-2 pl-8">
                                <div className="mx-auto px-0 py-20 max-w-none">
                                    <blockquote>
                                        <div>
                                            <svg className={`h-12 w-12 ${screen400 ? `text-black` : `text-white`} opacity-25`} fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                                                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                                            </svg>
                                            <Flip duration={1300} top>
                                                {
                                                    screen1076 ?
                                                        <p className={`mt-6 pl-1.5 pr-1.5 text-2xl font-medium ${screen400 ? `text-black` : `text-white`} tracking-wide text-center selection:bg-transparent`} style={{ wordSpacing: "0.105rem" }}
                                                            dangerouslySetInnerHTML={{
                                                                __html: `Hey there! My portfolio is a representation of all of my work that I've learned and accomplished as a <i><b>Software Developer</b></i>, <i><b>Website Developer</b></i>, <i><b>FullStack Developer</b></i>, <i><b>Cloud Developer</b></i> &rdquo;`
                                                            }}
                                                        /> :
                                                        screen933 ?
                                                            <p className={`md:mt-9 pl-1.5 pr-1.5 text-2xl font-medium ${screen400 ? `text-black` : `text-white`} tracking-wide text-center selection:bg-transparent`} style={{ wordSpacing: "0.105rem" }}
                                                                dangerouslySetInnerHTML={{
                                                                    __html: `Hey there! My portfolio is a representation of all of my work that I've learned and accomplished as a <i><b>Website Developer</b></i>, <i><b>FullStack Developer</b></i>, <i><b>Cloud Developer</b></i> &rdquo;`
                                                                }}
                                                            /> :
                                                            screen641 ?
                                                                <p className={`md:mt-9 pl-1.5 pr-1.5 text-2xl font-medium ${screen400 ? `text-black` : `text-white`} tracking-wide text-center selection:bg-transparent`} style={{ wordSpacing: "0.105rem" }}
                                                                    dangerouslySetInnerHTML={{
                                                                        __html: `Hey there! My portfolio is a representation of all of my work that I've learned and accomplished as a <i><b>FullStack Developer</b></i>, <i><b>Cloud Developer</b></i> &rdquo;`
                                                                    }}
                                                                /> :
                                                                screen360 ?
                                                                    <p className={`md:mt-9 pl-1.5 pr-1.5 text-xl font-medium ${screen400 ? `text-black` : `text-white`} tracking-wide text-center -ml-7 selection:bg-transparent`} style={{ wordSpacing: "0.105rem" }}
                                                                        dangerouslySetInnerHTML={{
                                                                            __html: `Hey there! My portfolio is a representation of all of work that I've learned as a <i><b>FullStack Developer</b></i>`
                                                                        }}
                                                                    /> :
                                                                    <p className={`md:mt-9 pl-1.5 pr-1.5 text-xl font-medium ${screen400 ? `text-black` : `text-white`} tracking-wide text-center -ml-7 selection:bg-transparent`} style={{ wordSpacing: "0.105rem" }}
                                                                        dangerouslySetInnerHTML={{
                                                                            __html: `Hey there! My portfolio is a representation of all of my work that I've learned as a <i><b>FullStack Developer</b></i> &rdquo;`
                                                                        }}
                                                                    />
                                                }
                                            </Flip>
                                        </div>
                                        <LightSpeed duration={1300}>
                                            <div className={`${!screen863 && `flex align-middle justify-center`}`}>
                                                <footer className="mt-10">
                                                    <p className={`text-base font-medium selection:bg-transparent ${screen400 ? `text-black` : `text-white`} tracking-wider cursor-pointer`} style={{ margin: !screen863 ? "0 auto" : "", marginBottom: !screen863 ? "1.05rem" : "0.95rem" }}>Muhammad Ali Sarwar</p>
                                                    <p className={`text-sm font-medium  ${screen400 ? `text-gray-700` : `text-indigo-100`} tracking-wide -mt-4 italic`}>Software Engineer, University of Karachi</p>
                                                </footer>
                                            </div>
                                        </LightSpeed>
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative bg-gray-800">
                    <div className="absolute inset-0">
                        <Image className="w-full h-full object-cover" src={javascript} alt="javascript" layout="fill" />
                        <div className="absolute inset-0 bg-gray-800 mix-blend-multiply" aria-hidden="true"></div>
                    </div>
                    <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 selection:bg-transparent">
                        <div className="text-center myHoverEffect3">
                            <Slide duration={1300} left><p className="mt-1 text-4xl font-extrabold text-gray-50 sm:text-5xl sm:tracking-normal lg:text-6xl cursor-pointer" style={{ wordSpacing: "0.285rem" }}>JavaScript Developer</p></Slide>
                            <Slide duration={1300} right><p className="pl-0.5 pr-0.5 max-w-xl mt-5 mx-auto italic text-xl text-gray-200 tracking-normal" style={{ wordSpacing: "0.115rem", fontSize: !screen300 ? "1.1rem" : "" }}>&ldquo; My personal programming language is the mighty JavaScript that's why I have great expertise in this language &rdquo;</p></Slide>
                        </div>
                    </div>
                </div>

                <div className="relative bg-gray-800">
                    <div className="absolute inset-0">
                        <Image className="w-full h-full object-cover" src={typescript} alt="typescript" layout="fill" />
                        <div className="absolute inset-0 bg-gray-800 mix-blend-multiply" aria-hidden="true"></div>
                    </div>
                    <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 selection:bg-transparent">
                        <div className="text-center myHoverEffect3">
                            <Slide duration={1300} right><p className="mt-1 text-4xl font-extrabold text-gray-50 sm:text-5xl sm:tracking-normal lg:text-6xl cursor-pointer" style={{ wordSpacing: "0.285rem" }}>TypeScript Developer</p></Slide>
                            <Slide duration={1300} left><p className="pl-0.5 pr-0.5 max-w-xl mt-5 mx-auto italic text-xl text-gray-200 tracking-normal" style={{ wordSpacing: "0.115rem", fontSize: !screen300 ? "1.1rem" : "" }}>&ldquo; My second programming language is the mighty TypeScript that's why I have great expertise in this language &rdquo;</p></Slide>
                        </div>
                    </div>
                </div>

                <footer className={`bg-gray-100 ${!screen770 && `-mt-0.5`} selection:bg-transparent`} aria-labelledby="footer-heading">
                    {screen770 && (
                        <div className="max-w-7xl mx-auto pt-16 pb-8 px-4 sm:px-6 lg:pt-24 lg:px-8">
                            <div className="flex align-middle justify-center">
                                <div className="grid grid-cols-2 gap-8 xl:col-span-2">
                                    <Slide duration={1300} left>
                                        <div className="md:grid md:grid-cols-2 md:gap-8">
                                            <div>
                                                <h3 className="text-sm font-semibold text-black tracking-wider uppercase ml-6 cursor-pointer myHoverEffect1">
                                                    FrontEnd
                                                </h3>
                                                <ul role="list" className="mt-4 space-y-4">
                                                    <li className="myHoverEffect3">
                                                        <a className="cursor-pointer text-base text-gray-500 hover:text-gray-900">
                                                            React JS
                                                        </a>
                                                    </li>
                                                    <li className="myHoverEffect3">
                                                        <a className="cursor-pointer text-base text-gray-500 hover:text-gray-900">
                                                            Next JS
                                                        </a>
                                                    </li>
                                                    <li className="myHoverEffect3">
                                                        <a className="cursor-pointer text-base text-gray-500 hover:text-gray-900">
                                                            Gatsby JS
                                                        </a>
                                                    </li>
                                                    <li className="myHoverEffect3">
                                                        <a className="cursor-pointer text-base text-gray-500 hover:text-gray-900">
                                                            React Native
                                                        </a>
                                                    </li>
                                                    <li className="myHoverEffect3">
                                                        <a className="cursor-pointer text-base text-gray-500 hover:text-gray-900">
                                                            PWA App
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="mt-12 md:mt-0">
                                                <h3 className="text-sm font-semibold text-black tracking-wider uppercase ml-7 cursor-pointer myHoverEffect1">
                                                    Backend
                                                </h3>
                                                <ul role="list" className="mt-4 space-y-4">
                                                    <li className="myHoverEffect3">
                                                        <a className="cursor-pointer text-base text-gray-500 hover:text-gray-900">
                                                            Node JS
                                                        </a>
                                                    </li>
                                                    <li className="myHoverEffect3">
                                                        <a className="cursor-pointer text-base text-gray-500 hover:text-gray-900">
                                                            Rest API
                                                        </a>
                                                    </li>
                                                    <li className="myHoverEffect3">
                                                        <a className="cursor-pointer text-base text-gray-500 hover:text-gray-900">
                                                            GraphQL API
                                                        </a>
                                                    </li>
                                                    <li className="myHoverEffect3">
                                                        <a className="cursor-pointer text-base text-gray-500 hover:text-gray-900">
                                                            AWS AppSync
                                                        </a>
                                                    </li>
                                                    <li className="myHoverEffect3">
                                                        <a className="cursor-pointer text-base text-gray-500 hover:text-gray-900">
                                                            AWS Apigateway
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </Slide>

                                    <Slide duration={1300} right>
                                        <div className="md:grid md:grid-cols-2 md:gap-8">
                                            <div>
                                                <h3 className="text-sm font-semibold text-black tracking-wider uppercase ml-7 cursor-pointer myHoverEffect1">
                                                    Database
                                                </h3>
                                                <ul role="list" className="mt-4 space-y-4">
                                                    <li className="myHoverEffect3">
                                                        <a className="cursor-pointer text-base text-gray-500 hover:text-gray-900">
                                                            MongoDB
                                                        </a>
                                                    </li>
                                                    <li className="myHoverEffect3">
                                                        <a className="cursor-pointer text-base text-gray-500 hover:text-gray-900">
                                                            FaundaDB
                                                        </a>
                                                    </li>
                                                    <li className="myHoverEffect3">
                                                        <a className="cursor-pointer text-base text-gray-500 hover:text-gray-900">
                                                            AWS DynamoDB
                                                        </a>
                                                    </li>
                                                    <li className="myHoverEffect3">
                                                        <a className="cursor-pointer text-base text-gray-500 hover:text-gray-900">
                                                            AWS Neptune
                                                        </a>
                                                    </li>
                                                    <li className="myHoverEffect3">
                                                        <a className="cursor-pointer text-base text-gray-500 hover:text-gray-900">
                                                            Aurora Serverless
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="mt-12 md:mt-0">
                                                <h3 className="text-sm font-semibold text-black tracking-wider uppercase ml-9 cursor-pointer myHoverEffect1">
                                                    Serverside
                                                </h3>
                                                <ul role="list" className="mt-4 space-y-4">
                                                    <li className="myHoverEffect3">
                                                        <a className="cursor-pointer text-base text-gray-500 hover:text-gray-900">
                                                            Express JS
                                                        </a>
                                                    </li>
                                                    <li className="myHoverEffect3">
                                                        <a className="cursor-pointer text-base text-gray-500 hover:text-gray-900">
                                                            Apollo Server
                                                        </a>
                                                    </li>
                                                    <li className="myHoverEffect3">
                                                        <a className="cursor-pointer text-base text-gray-500 hover:text-gray-900">
                                                            AppSync Server
                                                        </a>
                                                    </li>
                                                    <li className="myHoverEffect3">
                                                        <a className="cursor-pointer text-base text-gray-500 hover:text-gray-900">
                                                            AWS S3Bucket
                                                        </a>
                                                    </li>
                                                    <li className="myHoverEffect3">
                                                        <a className="cursor-pointer text-base text-gray-500 hover:text-gray-900">
                                                            AWS CodePipeline
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </Slide>
                                </div>
                            </div>
                        </div>
                    )}

                    <div className={`${!screen300 && `bg-black`} border-t border-gray-200 pt-8 pb-4 flex items-center align-middle justify-center flex-col lg:mt-16`}>
                        <Slide duration={1300} left>
                            <div className="flex space-x-6 md:order-2 align-middle">
                                <a className="cursor-pointer text-gray-400 hover:text-gray-500 myHoverEffect1"
                                    target="_blank" href="https://www.facebook.com/alisarwarr"
                                >
                                    <FacebookIcon fontSize="large" />
                                </a>
                                <a className="cursor-pointer text-gray-400 hover:text-gray-500 myHoverEffect1"
                                    target="_blank" href="https://www.instagram.com/alisarwarr"
                                >
                                    <InstagramIcon fontSize="large" />
                                </a>
                                <a className="cursor-pointer text-gray-400 hover:text-gray-500 myHoverEffect1"
                                    target="_blank" href="https://www.github.com/alisarwarr"
                                >
                                    <GitHubIcon fontSize="large" />
                                </a>
                                <a className="cursor-pointer text-gray-400 hover:text-gray-500 myHoverEffect1"
                                    target="_blank" href="https://www.linkedin.com/in/-alisarwar"
                                >
                                    <LinkedInIcon fontSize="large" />
                                </a>
                            </div>
                        </Slide>

                        <Slide duration={1300} right>
                            <p className={`mt-8 text-base md:mt-0 md:order-1 ${screen300 && `hidden`}`}>
                                <a href="#" className="text-gray-400 hover:text-gray-400 select-none"> Contact @ </a>
                                <a href="#" className="text-gray-400 hover:text-gray-400 select-none"> <span style={{ fontFamily: "serif !important" }} className="font-bold">+92318-8395072</span> ( WhatsApp ) </a>
                            </p>
                        </Slide>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default Home;