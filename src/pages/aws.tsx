import aws from '../utils/Aws';
//COMPONENTS
import { Layout, Aws } from '../components';


export default function() {
    return (
        <Layout title="AWS">
            <Aws
                aws={aws}
            />
        </Layout>
    )
}