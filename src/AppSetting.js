import Radio from '@mui/material/Radio';
import { useState } from 'react';
const AppSetting = () => {
    const [selectedValue, setSelectedValue] = useState('a');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    return (
        <>
            <div className='subHeader'>
                <div className='title'>Application Settings</div>
                <div className='edit'></div>
            </div>
            <div className="subBody">
                <div className='stitle'>Receive job applications via</div>
                <div className='sbody'>
                    <Radio onChange={handleChange} checked={selectedValue === 'a'} size="small" value={'a'} style={{ color: '#99CA3B' }} />Only on my dashboard
                </div>
                <div className='sbody'>
                    <Radio onChange={handleChange} checked={selectedValue === 'b'} value={'b'} size="small" style={{ color: '#99CA3B' }} />Email and on my dashboard</div>
                <div className='stitle'>*Please note, this setting will not impact your old job postings</div>
            </div>
        </>
    )
}
export default AppSetting