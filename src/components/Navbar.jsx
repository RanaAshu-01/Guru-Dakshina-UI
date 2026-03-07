import { NotebookPen } from 'lucide-react';

function Navbar() {
  return (
    <div className="w-full bg-blue-700 text-white">
      <div className="max-w-7xl mx-auto px-7 py-5 flex items-center">
        
     
        <div className="flex items-center gap-3 sm:border-r sm:border-white/50 p-2 ">
          
          <div className="px-2 py-1 rounded font-extrabold">
            <NotebookPen />
          </div>

          <h1 className="text-xl tracking-wide font-bold">
            Guru Dakshina
          </h1>
        </div>

        {/* Right Text */}
        <div className="text-sm opacity-90 sm:block hidden px-5">
          Education Department - Government of Assam
        </div>

      </div>
    </div>
  );
}

export default Navbar;
