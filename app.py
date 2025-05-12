from flask import Flask, render_template, request, jsonify
global tasks
app = Flask(__name__)
tasks = []

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/tasks', methods=['GET', 'POST', 'DELETE'])
def handle_tasks():
    if request.method == 'GET':
        return jsonify(tasks)

    elif request.method == 'POST':
        data = request.json
        tasks.append({
            'id': len(tasks) + 1,
            'task': data['task'],
            'done': False
        })
        return jsonify({'status': 'success'}), 201

    elif request.method == 'DELETE':
        data = request.json

        tasks = [t for t in tasks if t['id'] != data['id']]
        return jsonify({'status': 'deleted'}), 200

@app.route('/done/<int:task_id>', methods=['POST'])
def mark_done(task_id):
    for task in tasks:
        if task['id'] == task_id:
            task['done'] = not task['done']
            break
    return jsonify({'status': 'updated'})
    
if __name__ == '__main__':
    app.run(debug=True)
