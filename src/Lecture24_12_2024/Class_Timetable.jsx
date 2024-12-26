import * as React from "react";

class Class_Timetble extends React.Component {
    render(){
        return(
            <div>
                <center>
                <h1>Class Time-Table</h1>
                <table border={1}>
                    <tr>
                        <td colSpan={6} align="center">
                            <strong>
                                R K University School Of Enginnering 6IT-A
                            </strong>
                        </td>
                    </tr>

                    <tr align="center">
                        <td></td>
                        <td>Monday</td>
                        <td>Tuesday</td>
                        <td>Wendesday</td>
                        <td>Thrusday</td>
                        <td>Friday</td>
                    </tr>

                    <tr align="center">
                        <td>8:00 To 8:55</td>
                        <td rowSpan={2}>React (NV)</td>
                        <td>AI/Ml (CP)</td>
                        <td rowSpan={2}>AI/Ml (CP)</td>
                        <td rowSpan={2}>React (SMS)</td>
                        <td rowSpan={2}>TOC (AKK)</td>
                    </tr>
                
                    <tr align="center">
                        <td>8:55 To 9:45</td>
                        
                        <td>TOC (AKK)</td>
                        
                       
                        
                    </tr>
                    <tr align="center">
                        <td>Class/Lab Location</td>
                        <td>LL1</td>
                        <td>LL6</td>
                        <td>LL1</td>
                        <td>LL1</td>
                        <td>201</td>
                    </tr>
                   
                    <tr align="center">
                        <td>9:45 To 10:00</td>
                        <td colSpan={5} align="center">Tea Breake</td>
                    </tr>

                    <tr align="center">
                        <td>10:00 To 10:50</td>
                        <td rowSpan={2}>.Net (PJT)</td>
                        <td rowSpan={2}>.Net (BD)</td>
                        <td rowSpan={2}>PD (DS)</td>
                        <td rowSpan={2}>PD (DS)</td>
                        <td rowSpan={2}>.Net (BD)</td>
                    </tr>
                    
                    <tr align="center">
                        <td>10:50 To 11:40</td>
                       
                    </tr>
                    <tr align="center">
                        <td>Class/Lab Location</td>
                        <td>LL1</td>
                        <td>LL1</td>
                        <td>118</td>
                        <td>118</td>
                        <td>LL4</td>
                    </tr>
                   
                    <tr align="center">
                        <td>11:40 To 12:30</td>
                        <td colSpan={5} align="center">Lunch Breake</td>
                    </tr>
                   

                    <tr align="center">
                        <td>12:30 To 01:20</td>
                        <td rowSpan={2}>Library</td>
                        <td rowSpan={2}>React (NV)</td>
                        <td rowSpan={2}>Library</td>
                        <td rowSpan={2}>AI/ML (CP)</td>
                        <td rowSpan={2}>Library</td>
                    </tr>
                    <tr align="center">
                        <td>01:20 To 02:10</td>
                    </tr>

                    <tr align="center">
                        <td>Class/Lab Location</td>
                        <td></td>
                        <td>LL5</td>
                        <td></td>
                        <td>LL5</td>
                        <td></td>
                    </tr>
                   
                </table>
                </center>
            </div>
        );
    }

} 

export default Class_Timetble;