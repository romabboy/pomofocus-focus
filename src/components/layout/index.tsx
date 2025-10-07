import clsx from 'clsx';
import { WrapperContainer } from '../wrappers/WrapperContainer';
import { Header } from './Header';



interface LayoutProps {
    children: React.ReactNode,
    bgColor?: string
}


export const Layout: React.FC<LayoutProps> = ({ children, bgColor }) => {
    return (
        <div className={clsx('transition-colors duration-200')} style={{backgroundColor: bgColor}}>

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