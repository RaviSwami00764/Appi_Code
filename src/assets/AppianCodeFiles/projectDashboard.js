let UiDesigns = {
  "imgUrl" : "src/images/project-TaskDashboard.png",
  "dashboardCode": `a!localVariables(
  local!chatData:{
    a!map(
      sentBy: loggedInUser(),
      message: "Hi, how are you?"
    ),
    a!map(
      sentBy: "abcUser",
      message: "I'm good, thanks! How about you?"
    ),
    a!map(
      sentBy: "abcUser",
      message: "I'm doing well too, thanks for asking."
    ),
    a!map(
      sentBy: loggedInUser(),
      message: "That's great to hear. Anything exciting happening?"
    ),
  },
  local!meetData: {
    a!map(
      time: "9:20",
      heading: "Daily Project Review",
      description:"Team Organization",
      users: {"karanl@appcino.com","tuhsars@appcino.com",loggedInUser()},
      isPrivacy: true()
    ),
    a!map(
      time: "11:00",
      heading: "Sprint Surge",
      description:"Daily Boost for Agile Progress",
      users: {loggedInUser()},
      isPrivacy: false()
    )
  },
  local!chatHeading: "Team Chat",
  local!newMessage,
  local!tasks: {
    a!map(
      label: "Completed Task",
      value: 23
    ),
    a!map(
      label: "New Task",
      value: 10
    ),
    a!map(
      label: "Unfinished Task",
      value: 4
    ),
    a!map(
      label: "In Progress Task",
      value: 7
    )
  },
  {
    a!cardLayout(
      style: "#dfd8d2",
      showBorder: false(),
      shape: "ROUNDED",
      contents: {
        a!columnsLayout(
          columns:{
            a!columnLayout(
              width: "3X",
              contents:{
                a!cardLayout(
                  shape: "ROUNDED",
                  padding: "STANDARD",
                  showBorder: false,
                  marginBelow: "STANDARD",
                  contents:{
                    a!richTextDisplayField(
                      marginBelow: "STANDARD",
                      value:{
                        a!richTextItem(
                          size: "MEDIUM_PLUS",
                          text:{
                            "Tasks"
                          }
                        )

                      }
                    ),
                    a!forEach(
                      items: local!tasks,
                      expression: {
                        a!richTextDisplayField(
                          marginAbove: "STANDARD",
                          value:{
                            a!richTextItem(
                              text:{
                                index(fv!item,"label",{})
                              },
                              style: "STRONG"
                            )

                          }
                        ),  
                        a!cardLayout(
                          showBorder: false,
                          shape: "ROUNDED",
                          style: "#dfd8d2",
                          padding: "NONE",
                          contents:{
                            a!columnsLayout(
                              columns:{
                                a!columnLayout(
                                  width: concat(
                                    tointeger(index(fv!item,"value",null())*10/sum(index(local!tasks,"value",null()))),
                                    "X"
                                  ),
                                  contents:{
                                    a!cardLayout(
                                      showBorder: false,
                                      shape: "ROUNDED",
                                      style: "#b09f85",
                                      contents:{
                                        a!richTextDisplayField(
                                          value:{
                                            a!richTextItem(
                                              style: "STRONG",
                                              color: "#fff",
                                              text:{
                                                index(fv!item,"value",null()),
                                                " Tasks"
                                              }
                                            )

                                          }
                                        )
                                      }
                                    )
                                  }
                                ),
                                a!columnLayout()
                              }
                            )
                          }
                        )  
                      }
                    ),
                  }
                ),
                a!cardLayout(
                  shape: "ROUNDED",
                  showBorder: false,
                  padding: "STANDARD",
                  marginBelow: "STANDARD",
                  contents:{
                    a!richTextDisplayField(
                      value:{
                        a!richTextItem(
                          size: "MEDIUM_PLUS",
                          text:{
                            "Statics"
                          }
                        )
                      },
                      marginBelow: "STANDARD",
                    ),
                    a!columnsLayout(
                      alignVertical: "BOTTOM",
                      columns:{  
                        a!columnLayout(
                          width: "EXTRA_NARROW",
                          contents:{
                            a!columnsLayout(
                              columns:{
                                a!columnLayout(
                                  width: "2X",
                                  contents:{

                                  }
                                ),
                                a!columnLayout(
                                  width: "NARROW",
                                  contents:{
                                    a!cardLayout(
                                      shape: "ROUNDED",
                                      style: "#000",
                                      contents:{
                                        a!richTextDisplayField(
                                          tooltip: "4",
                                          value:{
                                            a!richTextItem(
                                              text: {  
                                                char(10),
                                                char(10),
                                                char(10),
                                                char(10),   
                                              }
                                            ),
                                          }
                                        )

                                      }
                                    ),
                                  }
                                ),
                                a!columnLayout(
                                  width: "2X",
                                  contents:{

                                  }
                                )  

                              }
                            ),
                            a!tagField(
                              align: "END",
                              tags:{
                                a!tagItem(
                                  backgroundColor: "#dfd8d2",
                                  text:{
                                    "Mo"
                                  }
                                )
                              }
                            )  
                          }
                        ), 
                        a!columnLayout(
                          width: "EXTRA_NARROW",
                          contents:{
                            a!columnsLayout(
                              columns:{
                                a!columnLayout(
                                  width: "2X",
                                  contents:{

                                  }
                                ),
                                a!columnLayout(
                                  width: "NARROW",
                                  contents:{
                                    a!cardLayout(
                                      shape: "ROUNDED",
                                      style: "#000",
                                      contents:{
                                        a!richTextDisplayField(
                                          value:{
                                            char(10),
                                            char(10),
                                            char(10),
                                            char(10),  
                                            char(10),
                                            char(10),
                                            char(10), 
                                          }
                                        )

                                      }
                                    ),
                                  }
                                ),
                                a!columnLayout(
                                  width: "2X",
                                  contents:{

                                  }
                                )  

                              }
                            ),
                            a!tagField(
                              align: "END",
                              tags:{
                                a!tagItem(
                                  backgroundColor: "#dfd8d2",
                                  text:{
                                    "Tu"
                                  }
                                )
                              }
                            )  
                          }
                        ), 
                        a!columnLayout(
                          width: "EXTRA_NARROW",
                          contents:{
                            a!columnsLayout(
                              columns:{
                                a!columnLayout(
                                  width: "2X",
                                  contents:{

                                  }
                                ),
                                a!columnLayout(
                                  width: "NARROW",
                                  contents:{
                                    a!cardLayout(
                                      shape: "ROUNDED",
                                      style: "#000",
                                      contents:{
                                        a!richTextDisplayField(
                                          value:{
                                            char(10),
                                            char(10),
                                            char(10), 
                                          }
                                        )

                                      }
                                    ),
                                  }
                                ),
                                a!columnLayout(
                                  width: "2X",
                                  contents:{

                                  }
                                )  

                              }
                            ),
                            a!tagField(
                              align: "END",
                              tags:{
                                a!tagItem(
                                  backgroundColor: "#dfd8d2",
                                  text:{
                                    "We"
                                  }
                                )
                              }
                            )  
                          }
                        ), 
                        a!columnLayout(
                          width: "EXTRA_NARROW",
                          contents:{
                            a!columnsLayout(
                              columns:{
                                a!columnLayout(
                                  width: "2X",
                                  contents:{

                                  }
                                ),
                                a!columnLayout(
                                  width: "NARROW",
                                  contents:{
                                    a!cardLayout(
                                      shape: "ROUNDED",
                                      style: "#000",
                                      contents:{
                                        a!richTextDisplayField(
                                          value:{
                                            char(10),
                                            char(10),
                                          }
                                        )

                                      }
                                    ),
                                  }
                                ),
                                a!columnLayout(
                                  width: "2X",
                                  contents:{

                                  }
                                )  

                              }
                            ),
                            a!tagField(
                              align: "END",
                              tags:{
                                a!tagItem(
                                  backgroundColor: "#dfd8d2",
                                  text:{
                                    "Th"
                                  }
                                )
                              }
                            )  
                          }
                        ), 
                        a!columnLayout(
                          width: "EXTRA_NARROW",
                          contents:{
                            a!columnsLayout(
                              columns:{
                                a!columnLayout(
                                  width: "2X",
                                  contents:{

                                  }
                                ),
                                a!columnLayout(
                                  width: "NARROW",
                                  contents:{
                                    a!cardLayout(
                                      shape: "ROUNDED",
                                      style: "#dfd8d2",
                                      contents:{
                                        a!richTextDisplayField(
                                          value:{
                                            char(10),
                                            char(10),
                                            char(10),
                                            char(10),
                                            char(10),
                                            char(10),
                                            char(10),
                                            char(10),
                                            char(10),
                                            char(10),
                                          }
                                        )

                                      }
                                    ),
                                  }
                                ),
                                a!columnLayout(
                                  width: "2X",
                                  contents:{

                                  }
                                )  

                              }
                            ),
                            a!tagField(
                              align: "END",
                              tags:{
                                a!tagItem(
                                  backgroundColor: "#dfd8d2",
                                  text:{
                                    "Fr"
                                  }
                                )
                              }
                            )  
                          }
                        ), 
                        a!columnLayout(
                          width: "EXTRA_NARROW",
                          contents:{
                            a!columnsLayout(
                              columns:{
                                a!columnLayout(
                                  width: "2X",
                                  contents:{

                                  }
                                ),
                                a!columnLayout(
                                  width: "NARROW",
                                  contents:{
                                    a!cardLayout(
                                      shape: "ROUNDED",
                                      style: "#dfd8d2",
                                      contents:{
                                        a!richTextDisplayField(
                                          value:{
                                            char(10),
                                            char(10),
                                            char(10),
                                            char(10),
                                            char(10),
                                            char(10),
                                            char(10),
                                            char(10),
                                            char(10),
                                            char(10),
                                          }
                                        )

                                      }
                                    ),
                                  }
                                ),
                                a!columnLayout(
                                  width: "2X",
                                  contents:{

                                  }
                                )  

                              }
                            ),
                            a!tagField(
                              align: "END",
                              tags:{
                                a!tagItem(
                                  backgroundColor: "#dfd8d2",
                                  text:{
                                    "Sa"
                                  }
                                )
                              }
                            )  
                          }
                        ), 
                        a!columnLayout(
                          width: "EXTRA_NARROW",
                          contents:{
                            a!columnsLayout(
                              columns:{
                                a!columnLayout(
                                  width: "2X",
                                  contents:{

                                  }
                                ),
                                a!columnLayout(
                                  width: "NARROW",
                                  contents:{
                                    a!cardLayout(
                                      shape: "ROUNDED",
                                      style: "#dfd8d2",
                                      contents:{
                                        a!richTextDisplayField(
                                          value:{
                                            char(10),
                                            char(10),
                                            char(10),
                                            char(10),
                                            char(10),
                                            char(10),
                                            char(10),
                                            char(10),
                                            char(10),
                                            char(10),
                                          }
                                        )

                                      }
                                    ),
                                  }
                                ),
                                a!columnLayout(
                                  width: "2X",
                                  contents:{

                                  }
                                )  

                              }
                            ),
                            a!tagField(
                              align: "END",
                              tags:{
                                a!tagItem(
                                  backgroundColor: "#dfd8d2",
                                  text:{
                                    "Su"
                                  }
                                )
                              }
                            )  
                          }
                        ), 
                      }
                    )  
                  }
                ),
              }
            ),
            a!columnLayout(
              width: "4X",
              contents:{
                a!cardLayout(
                  shape: "ROUNDED",
                  padding: "MORE",
                  showBorder: false,
                  contents: {
                    a!columnsLayout(
                      columns: {
                        a!columnLayout(
                          contents: {
                            a!richTextDisplayField(
                              value: {
                                a!richTextItem(
                                  text: "ORDER QUANTITTY ",
                                  size: "MEDIUM",
                                  style: "STRONG"
                                ),
                                a!richTextIcon(
                                  icon: "exclamation-circle",
                                  color: "#bbb",
                                  size: "MEDIUM"
                                )
                              }
                            ),
                            a!columnsLayout(
                              columns: {
                                a!columnLayout(
                                  contents: {
                                    a!richTextDisplayField(
                                      value: {
                                        a!richTextItem(
                                          text: "2.132",
                                          size: "LARGE",
                                          style: "STRONG"
                                        )
                                      }
                                    )
                                  }
                                ),
                                a!columnLayout(
                                  width: "",
                                  contents: {
                                    a!cardLayout(
                                      shape: "ROUNDED",
                                      showBorder: false,
                                      style: rule!ATA_utils_getLightHexCode(
                                        hexCode: cons!ATA_HEX_COLOR_CODES[19],
                                        percent: 80
                                      ),
                                      contents: {
                                        a!richTextDisplayField(
                                          align: "CENTER",
                                          value: {
                                            a!richTextItem(
                                              color: cons!ATA_HEX_COLOR_CODES[19],
                                              text: {
                                                a!richTextIcon(
                                                  icon: "level-up",
                                                ),
                                                " +1.2%"
                                              },
                                              style: "STRONG",
                                              size: "MEDIUM"
                                            )
                                          }
                                        )
                                      }
                                    )
                                  }
                                ),
                              }
                            ),
                            a!richTextDisplayField(
                              value: {
                                a!richTextItem(
                                  text: "Increase than last month ",
                                  size: "",
                                  style: "",
                                  color: "#bbb"
                                ),
                              }
                            ),
                          }
                        ),
                        a!columnLayout(
                          contents: {
                            a!areaChartField(
                              height: "SHORT",
                              label: "Cases by Month",
                              labelPosition: "ABOVE",
                              categories: {"Mar", "Apr", "May", "Jun", "Jul"},
                              series: {
                                a!chartSeries(label: "Met SLA", data: {72, 91, 125, 195, 92,}),
                                a!chartSeries(label: "Missed SLA", data: {67, 120, 90, 191, 90})
                              },
                              stacking: "NORMAL",
                              colorScheme: a!colorSchemeCustom(
                                colors: {"#b8e2ff","#2496e2",}
                              ),
                            )
                          }
                        ),
                      }
                    ),
                  }
                ),
                a!cardLayout(
                  marginAbove: "STANDARD",
                  shape: "ROUNDED",
                  padding: "MORE",
                  showBorder: false,
                  contents: {
                    a!columnsLayout(
                      columns: {
                        a!columnLayout(
                          contents: {
                            a!richTextDisplayField(
                              value: {
                                a!richTextItem(
                                  text: "AVG. ORDER VALUE ",
                                  size: "MEDIUM",
                                  style: "STRONG"
                                ),
                                a!richTextIcon(
                                  icon: "exclamation-circle",
                                  color: "#bbb",
                                  size: "MEDIUM"
                                )
                              }
                            ),
                            a!columnsLayout(
                              columns: {
                                a!columnLayout(
                                  contents: {
                                    a!richTextDisplayField(
                                      value: {
                                        a!richTextIcon(
                                          icon: "USD",
                                        ),
                                        a!richTextItem(
                                          text: "92.08",
                                          size: "LARGE",
                                          style: "STRONG"
                                        )
                                      }
                                    )
                                  }
                                ),
                                a!columnLayout(
                                  width: "",
                                  contents: {
                                    a!cardLayout(
                                      shape: "ROUNDED",
                                      showBorder: false,
                                      style: rule!ATA_utils_getLightHexCode(
                                        hexCode: cons!ATA_HEX_COLOR_CODES[18],
                                        percent: 80
                                      ),
                                      contents: {
                                        a!richTextDisplayField(
                                          align: "CENTER",
                                          value: {
                                            a!richTextItem(
                                              color: cons!ATA_HEX_COLOR_CODES[18],
                                              text: {
                                                a!richTextIcon(
                                                  icon: "level-down",
                                                ),
                                                " -0.2%"
                                              },
                                              style: "STRONG",
                                              size: "MEDIUM"
                                            )
                                          }
                                        )
                                      }
                                    )
                                  }
                                ),
                              }
                            ),
                            a!richTextDisplayField(
                              value: {
                                a!richTextItem(
                                  text: "Decrease than last month ",
                                  size: "",
                                  style: "",
                                  color: "#bbb"
                                ),
                              }
                            ),
                          }
                        ),
                        a!columnLayout(
                          contents: {
                            a!columnChartField(
                              height: "SHORT",
                              label: "2012 Tempo Usage Trends",
                              categories: {"Qt 1", "Qt 2", "Qt 3", "Qt 4"},
                              series: {
                                a!chartSeries(label: "IT", data: {92, 94, 93, 95}),
                                a!chartSeries(label: "Human Services", data: {84, 83, 85, 86}),
                                a!chartSeries(label: "Sales", data: {70, 63, 90, 72}),
                                a!chartSeries(label: "Marketing", data: {90, 70, 90, 90})
                              },
                              colorScheme: "SUNSET",
                              xAxisTitle: "Quarter",
                              yAxisTitle: "% Active",
                              showLegend: true
                            )
                          }
                        ),
                      }
                    ),
                  }
                ),
                a!cardLayout(
                  marginAbove: "STANDARD",
                  shape: "ROUNDED",
                  marginBelow: "STANDARD",
                  padding: "MORE",
                  showBorder: false,
                  contents: {
                    a!columnsLayout(
                      columns: {
                        a!columnLayout(
                          contents: {
                            a!richTextDisplayField(
                              value: {
                                a!richTextItem(
                                  text: "IMPRESSION ",
                                  size: "MEDIUM",
                                  style: "STRONG"
                                ),
                                a!richTextIcon(
                                  icon: "exclamation-circle",
                                  color: "#bbb",
                                  size: "MEDIUM"
                                )
                              }
                            ),
                            a!columnsLayout(
                              columns: {
                                a!columnLayout(
                                  contents: {
                                    a!richTextDisplayField(
                                      value: {
                                        a!richTextItem(
                                          text: "12.3K",
                                          size: "LARGE",
                                          style: "STRONG"
                                        )
                                      }
                                    )
                                  }
                                ),
                                a!columnLayout(
                                  width: "",
                                  contents: {
                                    a!cardLayout(
                                      shape: "ROUNDED",
                                      showBorder: false,
                                      style: rule!ATA_utils_getLightHexCode(
                                        hexCode: cons!ATA_HEX_COLOR_CODES[19],
                                        percent: 80
                                      ),
                                      contents: {
                                        a!richTextDisplayField(
                                          align: "CENTER",
                                          value: {
                                            a!richTextItem(
                                              color: cons!ATA_HEX_COLOR_CODES[19],
                                              text: {
                                                a!richTextIcon(
                                                  icon: "level-up",
                                                ),
                                                " +4.2%"
                                              },
                                              style: "STRONG",
                                              size: "MEDIUM"
                                            )
                                          }
                                        )
                                      }
                                    )
                                  }
                                ),
                              }
                            ),
                            a!richTextDisplayField(
                              value: {
                                a!richTextItem(
                                  text: "Increase than last month ",
                                  size: "",
                                  style: "",
                                  color: "#bbb"
                                ),
                              }
                            ),
                          }
                        ),
                        a!columnLayout(
                          contents: {
                            a!areaChartField(
                              height: "SHORT",
                              label: "Cases by Month",
                              labelPosition: "ABOVE",
                              categories: {"Mar", "Apr", "May", "Jun", "Jul"},
                              series: {
                                a!chartSeries(label: "Met SLA", data: {72, 191, 125, 195, 92,}),
                                a!chartSeries(label: "Missed SLA", data: {67, 190, 90, 191, 90})
                              },
                              stacking: "NORMAL",
                              colorScheme: a!colorSchemeCustom(
                                colors: {"#b5b5e2","#7878cf"}
                              ),
                            )
                          }
                        ),
                      }
                    ),
                  },
                ),
              }
            ),
            a!columnLayout(
              width: "4X",
              contents:{
                a!cardLayout(
                  shape: "ROUNDED",
                  padding: "MORE",
                  marginAbove: "",
                  marginBelow: "STANDARD",
                  showBorder: false(),
                  contents: {
                    a!sideBySideLayout(
                      marginBelow: "MORE",
                      alignVertical: "MIDDLE",
                      items: {
                        a!sideBySideItem(
                          item: a!richTextDisplayField(
                            value: a!richTextItem(
                              text: upper("Today's Meetings"),
                              style: "STRONG",
                              size: "MEDIUM"
                            )
                          ),
                          width: "MINIMIZE"
                        ),
                        a!sideBySideItem(
                          width: "MINIMIZE",
                          item: a!tagField(
                            tags: {
                              a!tagItem(
                                text: length({local!meetData}),
                                backgroundColor: "#2f69fd"
                              ),
                            }
                          )
                        ),
                        a!sideBySideItem(
                          item: a!richTextDisplayField(
                            align: "RIGHT",
                            value: a!richTextItem(
                              text: "+ Add new meet",
                              style: "",
                              color: "ACCENT",
                              size: ""
                            )
                          ),
                        ),
                      }
                    ),
                    a!forEach(
                      items: local!meetData,
                      expression: {
                        a!columnsLayout(
                          columns: {
                            a!columnLayout(
                              width: "1X",
                              contents: {
                                a!richTextDisplayField(
                                  value: {
                                    a!richTextItem(
                                      text: index(fv!item,"time",null()),
                                      style: "STRONG",
                                      size: "MEDIUM_PLUS"
                                    )
                                  }
                                ),
                              }
                            ),
                            a!columnLayout(
                              width: "3X",
                              contents: {
                                a!richTextDisplayField(
                                  value: {
                                    a!richTextItem(
                                      text: index(fv!item,"heading",null()),
                                      style: "STRONG",
                                      size: ""
                                    ),
                                    char(10),
                                    a!richTextItem(
                                      text: index(fv!item,"description",null()),
                                      style: "",
                                      size: "",
                                      color: "#bbb"
                                    )
                                  }
                                )
                              }
                            ),
                            a!columnLayout(
                              contents: {
                                a!sideBySideLayout(
                                  spacing: "NONE",
                                  items: {
                                    a!forEach(
                                      items: index(fv!item,"users",null()),
                                      expression: a!sideBySideItem(
                                        width: "MINIMIZE",
                                        item: a!imageField(
                                          size: "TINY",
                                          style: "AVATAR",
                                          images:  a!userImage(
                                            user: touser(fv!item)
                                          )
                                        )
                                      )
                                    ),
                                    a!sideBySideItem(
                                      width: "5X",
                                      item: a!richTextDisplayField(
                                        value: {
                                          a!richTextItem()
                                        }
                                      )
                                    )
                                  }
                                )
                              }
                            ),
                            a!columnLayout(
                              contents: {
                                a!sideBySideLayout(
                                  alignVertical: "MIDDLE",
                                  items: {
                                    a!sideBySideItem(
                                      item: a!richTextDisplayField(
                                        align: "RIGHT",
                                        value: {
                                          a!richTextItem(
                                            text: "Privacy",
                                            style: "STRONG"
                                          )
                                        }
                                      )
                                    ),
                                    a!sideBySideItem(
                                      width: "MINIMIZE",
                                      item: a!richTextDisplayField(
                                        align: "RIGHT",
                                        value: {
                                          a!richTextIcon(
                                            icon: if(
                                              toboolean(index(fv!item,"isPrivacy",null())),
                                              "toggle-on",
                                              "toggle-off",
                                            ),
                                            size: "LARGE",
                                            color:  if(
                                              toboolean(index(fv!item,"isPrivacy",null())),
                                              "ACCENT",
                                              "#bbb",
                                            ),
                                          )
                                        }
                                      )
                                    )
                                  }
                                )
                              }
                            ),
                          }
                        ),
                        a!sectionLayout(
                          divider: "BELOW",
                          showWhen: not(fv!isLast)
                        )
                      }
                    ),
                  }
                ),
                a!cardLayout(
                  shape: "ROUNDED",
                  showBorder: false,
                  style: "#000",
                  contents:{
                    a!cardLayout(
                      showBorder: false,
                      style: "#000",
                      contents:{
                        a!richTextDisplayField(
                          marginBelow: "STANDARD",
                          value:{
                            a!richTextItem(
                              size: "MEDIUM_PLUS",
                              text:{
                                local!chatHeading
                              }
                            )
                          }
                        ),
                      }
                    ),
                    a!forEach(
                      items: local!chatData,
                      expression:  a!columnsLayout(
                        alignVertical: "MIDDLE",
                        columns:{
                          a!columnLayout(
                            width: "EXTRA_NARROW",
                            contents:{
                              a!imageField(
                                showWhen: if(
                                  loggedInUser() = index(fv!item,"sentBy",{}),
                                  true(),
                                  false()
                                ),
                                align: "END",
                                style: "AVATAR",
                                size: "ICON_PLUS",
                                images:{
                                  a!userImage(
                                    user:{
                                      index(fv!item,"sentBy",{})

                                    }
                                  )

                                }
                              )

                            }
                          ),
                          a!columnLayout(
                            width: "3X",
                            contents:{
                              a!cardLayout(
                                style: "#161616",
                                shape: "ROUNDED",
                                showBorder: false,
                                contents:{
                                  a!richTextDisplayField(
                                    align:if(
                                      loggedInUser() = index(fv!item,"sentBy",{}),
                                      "LEFT",
                                      "RIGHT",
                                    ),
                                    value:{
                                      a!richTextItem(
                                        size: "MEDIUM",
                                        text:{
                                          index(fv!item,"message",{})
                                        }
                                      )
                                    }
                                  )
                                }
                              )

                            }
                          ),
                          a!columnLayout(
                            width: "EXTRA_NARROW",
                            contents:{
                              a!imageField(
                                showWhen: if(
                                  loggedInUser() = index(fv!item,"sentBy",{}),
                                  false(),
                                  true()
                                ),
                                style: "AVATAR",
                                size: "ICON_PLUS",
                                images:{
                                  a!userImage(
                                    user:{
                                      index(fv!item,"sentBy",{})

                                    }
                                  )

                                }
                              )

                            }
                          )  

                        }
                      )
                    ),
                    a!cardLayout(
                      showBorder: false,
                      shape: "ROUNDED",
                      style: "#161616",
                      contents:{
                        a!columnsLayout(
                          alignVertical: "MIDDLE",
                          columns:{
                            a!columnLayout(
                              width: "2X",
                              contents:{
                                a!paragraphField(
                                  placeholder: "Type a message...",
                                  value: local!newMessage,
                                  saveInto: {
                                    local!newMessage
                                  }
                                )
                              }
                            ),
                            a!columnLayout(
                              width: "EXTRA_NARROW",
                              contents:{
                                a!richTextDisplayField(
                                  align: "RIGHT",
                                  value:{
                                    a!richTextIcon(
                                      size: "MEDIUM_PLUS",
                                      icon:{
                                        "paper-plane"
                                      },
                                      color: if(
                                        a!isNullOrEmpty(local!newMessage),
                                        "#bbb",
                                        ""
                                      ),
                                      linkStyle: "STANDALONE",
                                      link: a!dynamicLink(
                                        showWhen: if(
                                          a!isNullOrEmpty(local!newMessage),
                                          false(),
                                          true()
                                        ),
                                        value:a!map(
                                          message: local!newMessage,
                                          sentBy: loggedInUser()
                                        ), 
                                        saveInto: {
                                          a!save(
                                            local!chatData,
                                            append(
                                              local!chatData,
                                              save!value   
                                            )
                                          ),
                                          a!save(
                                            local!newMessage,
                                            null()
                                          )
                                        }
                                      )
                                    )

                                  }
                                )

                              }
                            )  

                          }
                        )

                      }
                    )  
                  }
                )
              }
            ),
          }
        ),
      }
    ),
  }
)`
}