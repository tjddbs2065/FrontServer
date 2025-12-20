import PageLayout from "../layouts/ui/PageLayout";
import { PageContainer } from "../layouts/ui/PageContainer";
import LoginForm from "../components/Forms/LoginForm";

export default function LoginPage(){
    return (
        <PageLayout>
            <PageContainer align="center">
                <LoginForm />
            </PageContainer>
        </PageLayout>
    );
}