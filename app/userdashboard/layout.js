import MainContent from "../_components/MainContent";
import Sidebar from "../_components/Sidebar";
import SessionsProvider from "../_context/Providers";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <SessionsProvider>
          <div className="grid grid-cols-6 h-screen w-full">
            <Sidebar className="col-span-1" />

            <div className="col-span-5 flex flex-col bg-fuchsia-100">
              <div className="flex-grow  ">{children}</div>
            </div>
          </div>
        </SessionsProvider>
      </body>
    </html>
  );
}
