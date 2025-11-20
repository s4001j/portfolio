
export default function SkillTag({skill}) {
    return(
        <button className="hover:bg-orange-700 hover:text-gray-200 rounded-3xl border border-orange-400 h-[30px] m-1 p-1 pl-2 pr-2 text-center text-sm whitespace-nowrap">
            {skill}
        </button>
    );
}