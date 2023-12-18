import Grid from '@mui/material/Grid';
const MyAccount = () => {
    return (
        <>
            <div className='subHeader'>
                <div className='title'>My Account Settings</div>
                <div className='edit'></div>
            </div>
            <div className="subBody">
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <div className='stitle'>Full Name*</div>
                                <div className='sbody'>Divya Chatterjee</div>
                            </Grid>
                            <Grid item xs={6}>
                                <div className='stitle'>Designation</div>
                                <div className='sbody'>Assistant Manager - HR</div>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <div className='stitle'>Phone / Landline*</div>
                                <div className='sbody'>7012248563</div>
                            </Grid>
                            <Grid item xs={6}>
                                <div className='cpassword'>Change Password</div>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default MyAccount