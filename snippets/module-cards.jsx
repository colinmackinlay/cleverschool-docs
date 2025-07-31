export const ModuleCards = ({module, folder}) => {

    return (
        <Columns cols={3}>
            <Card
                title="Introduction"
                icon="book"
                href={"/" + folder + "/introduction"}
            >
                Introduction to the {module} module.
            </Card>
            <Card
                title="Getting Started"
                icon="screwdriver-wrench"
                href={"/" + folder + "/getting-started"}
            >
                Setting up and managing the {module} module.
            </Card>
            <Card
                title="Tutorials"
                icon="person-chalkboard"
                href={"/" + folder + "/tutorials"}
            >
                Short video tutorials
            </Card>
        </Columns>
    )
}



