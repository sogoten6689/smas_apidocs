define({ "api": [
  {
    "type": "get",
    "url": "/teacher/1/school/12313/academic_year_id/1",
    "title": "Classes Search Information",
    "name": "GetInfoSearchForClass",
    "group": "Điểm_danh",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Users unique ID.</p>"
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
            "description": "<p>ID Academic Year.</p>"
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
            "field": "class_name",
            "description": "<p>ClassName of the School By User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "start_date",
            "description": "<p>StartDate of the Academy.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "end_date",
            "description": "<p>EndDate of the Academy.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "disable_date",
            "description": "<p>DisableDate of the Academy.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"class_name\": [\"7A1\", \"7A2\", \"7A3\"],\n  \"start_date\": \"1/4/2020\",\n  \"end_date\": \"20/7/2020\",\n  \"disable_date\": \"20/6/2020\",\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "myapp/diem_danh.js",
    "groupTitle": "Điểm_danh"
  }
] });
