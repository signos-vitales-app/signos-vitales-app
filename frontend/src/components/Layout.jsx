import Sidebar from './Sidebar';

const Layout = ({ children }) => {
    return (
        <div className="flex min-h-screen bg-gray-100">
            <Sidebar />
            <main className="flex-grow transition-all duration-300 pl-64">
                {children}
            </main>
        </div>
    );
};

export default Layout; 