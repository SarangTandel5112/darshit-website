import PavanityNavbar from '../../components/navbar/pavanity-navbar';
import PavanityFooter from '../../components/footer/pavanity-footer';

export default function TestHome() {
    return (
        <div>
            <PavanityNavbar />
            <div className="s-py-100 bg-white dark:bg-title">
                <div className="container-fluid">
                    <div className="max-w-[1720px] mx-auto text-center">
                        <h1 className="text-4xl font-bold text-title dark:text-white">
                            Pavanity Global - Test Page
                        </h1>
                        <p className="mt-4 text-title dark:text-white-light">
                            If you see this, the basic components are working!
                        </p>
                    </div>
                </div>
            </div>
            <PavanityFooter />
        </div>
    );
}
