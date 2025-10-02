import { WrapperContainer } from '../wrappers/WrapperContainer';
import { Header } from './Header';

enum BgColor {
    RED = '#ba4949',
    GREEN = '#38858a',
    BLUE = '#397097',
}

interface LayoutProps {
    children: React.ReactNode,
    bgColor?: BgColor
}


export const Layout: React.FC<LayoutProps> = ({ children, bgColor = BgColor.RED }) => {
    return (
        <div className={`bg-black`}>

            <WrapperContainer>
                <>
                    <Header />
                    <main>
                        {children}
                    </main>
                    <footer></footer>
                </>
            </WrapperContainer>
        </div>

    )
}