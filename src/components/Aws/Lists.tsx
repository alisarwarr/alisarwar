import Image from 'next/image';
//MATERIAL-UI
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';


type ListsProps = {
    name: string;
    detail: string;
    pic: any;
}

function Lists({
    name,
    detail,
    pic
}: ListsProps) {
    return (
        <Card raised className="ml-9 mr-8 mt-2 mb-2 myHoverEffect4 border-2 border-gray-200">
            <CardActionArea>
                <ListItem>
                    <ListItemAvatar>
                        <div style={{
                            width: (name==="IAM"||name==="VPC"||name==="EventBridge"||name==="Amplify"||name==="Neptune"||name==="Pinpoint")?43:35,
                            height: (name==="IAM"||name==="VPC"||name==="EventBridge"||name==="Amplify"||name==="Neptune"||name==="Pinpoint")?43:35,
                            marginLeft: (name==="IAM"||name==="VPC"||name==="EventBridge"||name==="Amplify"||name==="Neptune"||name==="Pinpoint")?-5:0
                        }}>
                            <Image src={pic}/>
                        </div>
                    </ListItemAvatar>
                    <ListItemText
                        primary={<b>{name}</b>}
                        secondary={detail}
                    />
                </ListItem>
            </CardActionArea>
        </Card>
    )
}

export default Lists;