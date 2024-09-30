
import { montserrat } from './ui/fonts';
import './ui/global.css'
import SideNav from "@/app/ui/dashboard/sidenav";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
      <h1>Este es un título</h1>
        <div style={{border: '1px solid #000' }}> El tipo "string" {children}
        </div>
        <div className="flex h-screen flex-col md: flex-row md:overflow-hidden">
            <div className="w-full flex-none md:w-64">
                <SideNav />
            </div>
            <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
        </div>
      </body>
    </html>
  );
}
