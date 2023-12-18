import profile from './profile.png';
const MyProfile = ()=>{
    return (
        <>
            <div className='subHeader'>
                <div className='title'>My Profile</div>
                <div className='edit'></div>
                </div>
                <div className="subBody">
                <div className='profileDetail'>
                    <div className='profileImage'>
                    <img src={profile} alt='profile' />
                    <div className='pedit'></div>
                    </div>
                    <div className='profilefields'>
                    <h1>Divya Chatterjee</h1>
                    <div className='stitle'>Designation</div>
                    <div className='sbody'>Assistant Manager - HR</div>
                    <div className='stitle'>Company Name</div>
                    <div className='sbody'>XXY Company Name</div>
                    </div>
                </div>
                <div className='stitle'>About Me</div>
                <div className='sbody'>Microsoft enables digital transformation for the era of an intelligent cloud and an intelligent edge. Its mission is to empower every person and every organization on the planet to achieve more. Microsoft set up its India operations in 1990. Microsoft in India offers its global cloud services from local data centers to accelerate digital transformation across Indian start-ups, businesses, and government agencies.</div>
            </div>
        </>
    )
}

export default MyProfile