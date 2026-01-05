import { PageContainer } from "../shared/layouts/ui/PageForm";
import PageLayout from "../shared/layouts/ui/PageLayout";
import LoginContainer from "../features/auth/ui/LoginContainer";

export default function LoginPage(){
    return (
        <PageLayout>
            <PageContainer align="center">
                <LoginContainer />
            </PageContainer>
        </PageLayout>
    );
}