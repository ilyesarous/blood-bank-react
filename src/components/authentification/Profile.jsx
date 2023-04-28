import { Input, InputLabel, Table, TableCell, TableContainer, TableRow, Typography } from "@mui/material"

//lezmni nkamal lprofile aala 9e3da :3
const Profile = () => {

    return (
        <TableContainer>
            <Table>
                <TableRow >
                    <TableCell sx={{display:"flex", flexDirection:"row", justifyContent:"center", gap:5, alignItems:"flex-start"}}>
                        <InputLabel>name</InputLabel>
                        <Input type="text"/>
                        <InputLabel>email</InputLabel>
                        <Input type="text"/>
                    </TableCell>
                </TableRow>
                <TableRow >
                    <TableCell sx={{display:"flex", flexDirection:"row", justifyContent:"center", gap:6, alignItems:"flex-start"}}>
                        <InputLabel>role</InputLabel>
                        <Input type="text"/>
                        <InputLabel>password</InputLabel>
                        <Input type="text"/>
                    </TableCell>
                </TableRow>
            </Table>
        </TableContainer>
     )

}

export default Profile