import Image from 'next/image';
import { aws3 } from '../../images/services-pics';
import Lists from './Lists';
//MATERIAL-UI
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
//REACT-REVEAL
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';


type AwsProps = {
    aws: Array<{ id: number, name: string, detail: string, pic: any }>;
}

function Aws({ aws }: AwsProps) {
    const screen995 = useMediaQuery('(max-width: 995px)');
    const screen680 = useMediaQuery('(max-width: 680px)');
    const screen640 = useMediaQuery('(max-width: 640px)');
    const screen450 = useMediaQuery('(max-width: 450px)');
    const screen350 = useMediaQuery('(max-width: 350px)');


    return (
        <Zoom duration={1300}>
            <div className={`d-flex justify-content-center align-items-center flex-column pl-7 pr-7 ${screen350 ? `mt-14` : `mt-12`} selection:bg-transparent`}>
                {
                    screen640?(
                        screen450?
                            <Typography variant="h2" className="mt-16 fw-bold text-white bg-black cursor-default pt-2 pb-6 pl-8 pr-8 rounded-xl shadow-xl shadow-gray-700/75">
                                AWS
                            </Typography>
                        :
                            <Typography variant="h2" className="mt-16 fw-bold text-white bg-black cursor-default pt-2 pb-3 pl-8 pr-8 rounded-xl flex align-middle shadow-xl shadow-gray-700/75">
                                <span className="xs:mt-3 sm:mt-2.5 pr-5"> AWS </span>
                                <Image src={aws3} width="70rem" height="46.75rem" className="mt-1"/>
                            </Typography>
                    ):(
                        <Typography variant="h2" className="mt-16 fw-bold text-white bg-black cursor-default pt-2 pb-3 pl-8 pr-8 rounded-xl flex align-middle shadow-xl shadow-gray-700/75">
                            <span className="sm:mt-2.5 md:mt-2 lg:mt-1.5 xl:mt-1 2xl:mt-0.5 pr-5"> AWS </span>
                            <Image src={aws3} width="90rem" height="70rem" className="mt-1"/>
                        </Typography>
                    )
                }

                <Typography variant="body1" className="badge text-dark bg-light mt-3 cursor-default">
                    using " Cloud Development Kit (CDK) " TypeScript
                </Typography>

                <List className={`bg-dark shadow-lg ${screen995?`w-full`:`w-50`}`} style={{ margin: "0 auto", marginTop: screen680 ? 8.85 : 16.65, marginBottom: 12.25, paddingTop: 23.75, paddingBottom: 23.75 }}>
                    {
                        aws.map(({
                            id,
                            name,
                            detail,
                            pic
                        }) => (
                            <Fade key={id}>
                                <Lists
                                    name={name}
                                    detail={detail}
                                    pic={pic}
                                />
                            </Fade>
                        ))
                    }
                </List>
            </div>
        </Zoom>
    )
}

export default Aws;