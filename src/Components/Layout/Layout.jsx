import { Outlet } from "react-router-dom"
import {Content, Footer} from "antd/es/layout/layout";
import {Button} from "antd";
import {WhatsAppOutlined} from '@ant-design/icons';

export default function Layout(){
    return(
        <div>
            <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64, minHeight: "90vh" }}>
                <div className="site-layout-background" style={{ padding: 24 }}>
                    <Outlet />
                </div>
            </Content>

            <Footer style={{ textAlign: 'center' }}>
                ©{new Date().getFullYear()} Created by Edward Hernández
                <Button type="link" href={"tel:+573117919295"} block>
                    <WhatsAppOutlined />+57 311 791 92 95
                </Button>
            </Footer>
        </div>
    );
}