import PageLayout from "../layouts/ui/PageLayout";
import { PageContainer } from "../layouts/ui/PageForm";
import LoginContainer from "../components/Login/LoginContainer";

export default function LoginPage(){
    return (
        <PageLayout>
            <PageContainer align="center">
                <LoginContainer />
            </PageContainer>
        </PageLayout>
    );
}