// Modify this file to change what commands output to your statusbar, and
// recompile using the make command.
static const Block blocks[] = {

    /*Icon*/ /*Command*/ /*Update Interval*/ /*Update Signal*/

    {"", "cpu", 1, 10},
    {"", "memory", 1, 10},
    //   {"", "moonphase", 1, 10},
    // {"", "disk", 1, 10},
    //{"", "ipshow", 1, 10},
    {"", "battery", 1, 10},
    {"", "clock", 60, 1},
};

// sets delimeter between status commands. NULL character ('\0') means no
// delimeter.
static char delim[] = " | ";
static unsigned int delimLen = 5;
