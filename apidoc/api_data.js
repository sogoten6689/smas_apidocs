define({ "api": [
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./apidoc/main.js",
    "group": "E:\\imt_project_2020\\SMAS_OLD\\api_docs\\apidoc\\main.js",
    "groupTitle": "E:\\imt_project_2020\\SMAS_OLD\\api_docs\\apidoc\\main.js",
    "name": ""
  },
  {
    "type": "POST",
    "url": "/attendance/student-attendances/",
    "title": "Lưu điểm danh",
    "name": "Lưu_điểm_danh",
    "description": "<p>Lưu điểm danh cho lớp học.</p>",
    "group": "Điểm_danh2",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Token",
            "description": "<p>Token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_id",
            "description": "<p>ID user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "teacher_id",
            "description": "<p>ID teacher.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "school_id",
            "description": "<p>ID school.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "class_id",
            "description": "<p>ID class.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "session",
            "description": "<p>Code session.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "date",
            "description": "<p>Date attendance.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "students",
            "description": "<p>List students.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "students.id",
            "description": "<p>ID student.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "students.attendance_image",
            "description": "<p>Attendance image of user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "students.attendance_value",
            "description": "<p>Attendance image of user.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n     http://localhost:1234/api/attendance/student-attendances/\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Trả về true.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "message",
            "description": "<p>Lưu thành công</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Response",
          "content": "HTTP/1.1 OK\n{\n     \"success\": true,\n     \"message\": \"Lưu thành công\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Trả về false.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Nội dung thông báo lỗi.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error Response",
          "content": "HTTP/1.1 Error\n{\n     \"success\": false,\n     \"message\": \"Lưu thất bại\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./myapp/attendance.js",
    "groupTitle": "Điểm_danh2"
  },
  {
    "type": "get",
    "url": "attendance/ademic-date/user/1/teacher/1/school/12313/academic_year/1",
    "title": "Ngày học kì",
    "name": "AcademicDate",
    "description": "<p>Lấy ngày bắt đầu và ngày kết thúc của học kì.</p>",
    "group": "Điểm_danh",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Token",
            "description": "<p>Token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n     http://localhost:1234/api/attendance/ademic-date/user/1/teacher/1/school/12313/academic_year/1\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "user_id",
            "description": "<p>ID user.</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "teacher_id",
            "description": "<p>ID teacher.</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "academic_year_id",
            "description": "<p>ID academic year.</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "school_id",
            "description": "<p>ID school.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "start_date",
            "description": "<p>StartDate of the academy.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "end_date",
            "description": "<p>EndDate of academy.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "disable_date",
            "description": "<p>DisableDate of the academy.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"start_date\": \"1/4/2020\",\n  \"end_date\": \"20/7/2020\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Trả về false.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error_code",
            "description": "<p>Mã lỗi.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Nội dung thông báo lỗi.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error Response TEACHER_NOT_FOUND",
          "content": "HTTP/1.1 Error\n{\n     \"success\": false,\n     \"error_code\": \"TEACHER_NOT_FOUND\",\n     \"message\": \"Mã giáo viên không tồn tại. Vui lòng kiểm tra lại\"\n}",
          "type": "json"
        },
        {
          "title": "Error Response SCHOOL_NOT_FOUND",
          "content": "HTTP/1.1 Error\n{\n     \"success\": false,\n     \"error_code\": \"SCHOOL_NOT_FOUND\",\n     \"message\": \"Mã trường không tồn tại. Vui lòng kiểm tra lại\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "{\n     \"error_code\": \"ERROR_CODE_VALIDATE_TOKEN_FAIL\",\n     \"error_message\": \"Phiên làm việc đã kết thúc, vui lòng đăng nhập lại\",\n     \"success\": false\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./myapp/attendance.js",
    "groupTitle": "Điểm_danh"
  },
  {
    "type": "get",
    "url": "statistical/ademic-date/user/1/teacher/1/school/12313/academic_year/1",
    "title": "Ngày học kì",
    "name": "AcademicDate",
    "description": "<p>Lấy ngày bắt đầu và ngày kết thúc của học kì.</p>",
    "group": "Điểm_danh",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Token",
            "description": "<p>Token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n     http://localhost:1234/api/attendance/ademic-date/user/1/teacher/1/school/12313/academic_year/1\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "user_id",
            "description": "<p>ID user.</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "teacher_id",
            "description": "<p>ID teacher.</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "academic_year_id",
            "description": "<p>ID academic year.</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "school_id",
            "description": "<p>ID school.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "start_date",
            "description": "<p>StartDate of the academy.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "end_date",
            "description": "<p>EndDate of academy.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "disable_date",
            "description": "<p>DisableDate of the academy.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"start_date\": \"1/4/2020\",\n  \"end_date\": \"20/7/2020\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Trả về false.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error_code",
            "description": "<p>Mã lỗi.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Nội dung thông báo lỗi.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error Response TEACHER_NOT_FOUND",
          "content": "HTTP/1.1 Error\n{\n     \"success\": false,\n     \"error_code\": \"TEACHER_NOT_FOUND\",\n     \"message\": \"Mã giáo viên không tồn tại. Vui lòng kiểm tra lại\"\n}",
          "type": "json"
        },
        {
          "title": "Error Response SCHOOL_NOT_FOUND",
          "content": "HTTP/1.1 Error\n{\n     \"success\": false,\n     \"error_code\": \"SCHOOL_NOT_FOUND\",\n     \"message\": \"Mã trường không tồn tại. Vui lòng kiểm tra lại\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "{\n     \"error_code\": \"ERROR_CODE_VALIDATE_TOKEN_FAIL\",\n     \"error_message\": \"Phiên làm việc đã kết thúc, vui lòng đăng nhập lại\",\n     \"success\": false\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./myapp/statistical.js",
    "groupTitle": "Điểm_danh"
  },
  {
    "type": "get",
    "url": "attendance/history/user/1/teacher/1/pupil/7/school/12313/academic_year/1",
    "title": "Lịch sử điểm danh",
    "name": "AttendanceHistory",
    "description": "<p>Lấy lịch sử điểm danh của một học sinh.</p>",
    "group": "Điểm_danh",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Token",
            "description": "<p>Token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n     http://localhost:1234/api/attendance/history/user/1/teacher/1/pupil/7/school/12313/academic_year/1\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "pupil",
            "description": "<p>ID user.</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "teacher_id",
            "description": "<p>ID teacher.</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "academic_year_id",
            "description": "<p>ID academic year.</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "school_id",
            "description": "<p>ID school.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "History",
            "description": "<p>Students Attendance history.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "history.statistical",
            "description": "<p>History statictical.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "history.statistical.total_present",
            "description": "<p>History statistical of present students.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "history.statistical.total_excused_absence",
            "description": "<p>History statistical of excused absence students.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "history.statistical.total_unexcused_absence",
            "description": "<p>History statistical of unexcused absence students.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "history.statistical.total_uncheck",
            "description": "<p>History statistical of uncheck students.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "history.dates",
            "description": "<p>List of students history dates.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "history.dates.name",
            "description": "<p>Name of date.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "history.dates.attendance_value",
            "description": "<p>Students history attendance value.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"history\": {\n     \"statistical\": {\n     \"total_present\": \"4\",\n     \"total_excused_absence\": \"2\",\n     \"total_unexcused_absence\": \"1\",\n     \"total_uncheck\": \"0\"\n    },\n    \"dates\": [\n        {\n            \"name\": \"21/3/2020\",\n            \"attendance_value\": null\n        },\n        {\n            \"name\": \"22/3/2020\",\n            \"attendance_value\": \"K\"\n        },\n        {\n            \"name\": \"23/3/2020\",\n            \"attendance_value\": \"P\"\n        },\n        {\n            \"name\": \"24/3/2020\",\n            \"attendance_value\": \"P\"\n        },\n        {\n            \"name\": \"25/3/2020\",\n            \"attendance_value\": \"C\"\n        },\n        {\n            \"name\": \"26/3/2020\",\n            \"attendance_value\": \"C\"\n        },\n        {\n            \"name\": \"27/3/2020\",\n            \"attendance_value\": \"C\"\n        },\n        {\n            \"name\": \"29/3/2020\",\n            \"attendance_value\": \"C\"\n        },\n        {\n            \"name\": \"30/3/2020\",\n            \"attendance_value\": \"K\"\n        }\n    ]\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Trả về false.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error_code",
            "description": "<p>Mã lỗi.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Nội dung thông báo lỗi.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n     \"error_code\": \"ERROR_CODE_VALIDATE_TOKEN_FAIL\",\n     \"error_message\": \"Phiên làm việc đã kết thúc, vui lòng đăng nhập lại\",\n     \"success\": false\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./myapp/attendance.js",
    "groupTitle": "Điểm_danh"
  },
  {
    "type": "get",
    "url": "attendance/students/user/1/teacher/1/class/3/date/1-4-2020/school/12313/academic_year/1",
    "title": "Danh sách điểm danh",
    "name": "GetListAttendance",
    "description": "<p>Lấy thông tin/danh sách điểm danh của lớp.</p>",
    "group": "Điểm_danh",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Token",
            "description": "<p>Token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n     http://localhost:1234/api/attendance/students/user/1/teacher/1/class/3/date/1-4-2020/school/12313/academic_year/1\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "user_id",
            "description": "<p>ID user.</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "teacher_id",
            "description": "<p>ID teacher.</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "class_id",
            "description": "<p>ID class.</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "academic_year_id",
            "description": "<p>ID academic year.</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "school_id",
            "description": "<p>ID school.</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "session_code",
            "description": "<p>Session of day.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "date",
            "description": "<p>Chose date.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "date",
            "description": "<p>Chose date.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "total",
            "description": "<p>Total of students in class.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "presence",
            "description": "<p>Total of presence students in class.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "absent",
            "description": "<p>Total of absent students in class.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "class_image",
            "description": "<p>Image of class.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "class_name",
            "description": "<p>Name of class.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "students",
            "description": "<p>List of student profiles.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sutdents.name",
            "description": "<p>Students name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sutdents.id",
            "description": "<p>Students id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sutdents.avatar",
            "description": "<p>Students avatar.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sutdents.attendance_value",
            "description": "<p>Students attendance value.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sutdents.present_image",
            "description": "<p>Students present image.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"date\": \"1/4/2020\",\n  \"total\": \"5\",\n  \"presence\": \"4\",\n  \"absent\": \"1\",\n  \"class_image\": null,\n  \"students\": [\n          {\n             \"name\": \"Nguyễn Văn ABCDE\",\n             \"puipil_id\": 1,\n             \"avatar\": null,\n             \"attendance_value\": \"C\",\n             \"present_image\": null,\n         },\n         {\n             \"name\": \"Nguyễn Văn FGHIKL\",\n             \"avatar\": null,\n             \"attendance_value\": \"C\",\n             \"present_image\": null,\n         },\n         {\n             \"name\": \"Nguyễn Văn MNOSR\",\n             \"puipil_id\": 2,\n             \"avatar\": null,\n             \"attendance_value\": \"C\",\n             \"present_image\": null,\n         },\n         {\n             \"name\": \"Nguyễn Văn D\",\n             \"puipil_id\": 3,\n             \"avatar\": null,\n             \"attendance_value\": \"K\",\n             \"present_image\": null,\n         }\n     ]\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Trả về false.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error_code",
            "description": "<p>Mã lỗi.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Nội dung thông báo lỗi.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n     \"error_code\": \"ERROR_CODE_VALIDATE_TOKEN_FAIL\",\n     \"error_message\": \"Phiên làm việc đã kết thúc, vui lòng đăng nhập lại\",\n     \"success\": false\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./myapp/attendance.js",
    "groupTitle": "Điểm_danh"
  }
] });