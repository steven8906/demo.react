import {Skeleton, Card, Avatar, Button, Divider} from 'antd';
import {GithubOutlined, UserOutlined} from '@ant-design/icons';
import Meta from "antd/es/card/Meta";
import {AVATAR_GIT_HUB} from "../../Config/Constants";

export default function Profile(props) {
    console.log(props.data.dataProfile)
    if (Object.keys(props.data.dataProfile).length > 0) {
        return (
            <div style={{display: "flex", justifyContent: "center"}}>
                <Card
                    style={{width: 300, marginTop: 16}}
                    cover={
                        <img loading={props.data.isLoading.toString()}
                             src={props.data.dataProfile.avatar_url}
                             alt=""/>
                    }
                >
                    <Skeleton loading={props.data.isLoading} avatar active>
                        <Meta
                            avatar={<Avatar src={AVATAR_GIT_HUB}/>}
                            title={props.data.dataProfile.login}
                            description={props.data.dataProfile.bio}
                        />

                        <div>
                            {props.data.dataProfile.name != null ?
                                <div><Divider /><p><b>Nombre</b>: {props.data.dataProfile.name}</p></div>:""
                            }
                            <Divider />
                            <Button type="link" block href={props.data.dataProfile.html_url}>
                                <UserOutlined /> Página de perfil
                            </Button>
                            <Button type="link" block href={props.data.dataProfile.repos_url}>
                                <GithubOutlined /> Repos
                            </Button>
                        </div>
                    </Skeleton>
                </Card>
            </div>
        );
    } else return null;
}